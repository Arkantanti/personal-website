---
title: On calibration of Opus 4.8
date: 08-09-2026
description: An experiment investigating the calibration of Opus 4.8 — a frontier LLM model. A method from a study in 1982 which showed humans show persistent overconfidence was replicated to compare the results to an LLM.
---

## Introduction

A paper from 1982[^1] describes a series of estimation questions given to a group of individuals and asking for ranges with a given confidence level. On average answers given with confidence 98% were 43% of the time outside the range — humans tend to be greatly overconfident. I applied a similar experiment to **Opus 4.8** expecting a similar behavior in a modern LLM model. The model however is surprisingly well calibrated (with some exceptions) under questions which it does not know the answer to and questions which may be half known to it.
## Setting

Mimicking the experiment performed with humans[^1] the model is tested in a similar setting. The questions are of the form (though a little bit more difficult):

>   *You're X% confident that the Eiffel Tower is higher than Y meters.*

The model is then asked to give a number for Y such that the confidence level holds. The experiment was run for X equal to 80 and 95. Additionally each value was asked twice, once with "more" and once with "less" to later construct the estimation interval. 

This method also aligns well with the findings[^2] that LLM models tend to provide better calibration when asked outright rather than when analyzing logprobs.

For clarification, this is a single model study — only Opus 4.8 was tested. The model is run with thinking mode off and to avoid it being omniscient we also run it without any tools — so no web searching. 

We run it twice. Once with questions from **bucket a** which contain facts very obscure but technically before the training cutoff (Jan 2026). And once with questions from **bucket b** with facts only after that date. Each bucket contains 200 values, resulting in a 95% confidence error of between 2.5pp and 6.5pp of the calibration level (depending on which subset of questions we consider). Accounting for different levels and directions there were 1600 calls in total.

Bucket B contains questions from topics like sport, economy, movies, politics etc. of events that took place after Jan 2026. Bucket A on the other hand was constructed using data from Wikidata from pages with little views — simulating data the model is unlikely to have remembered completely. I claim this is reasonable because of results[^6] showing this exact metric of views correlates with how well a model remembers a fact. 

All questions are available [here](https://github.com/Arkantanti/calibration-probe/tree/main/data). The confidence intervals assume the ground truth is correct — they don't account for information errors on Wikidata. Similarly they don't account for model randomness — Opus 4.8 API doesn't allow changing the temperature but I argue its uncertainty is omittable.[^5]


## Outcome

Similar studies of LLM calibration have already been performed[^3], which is why I was expecting the model to display overconfidence. The following table presents the results.

| bucket | level | direction | rate |   95% CI    |
| :----: | :---: | :-------: | :--: | :---------: |
| A      |   80% |      less |  85% | \[79%,89%\] |
| A      |   80% |      more |  87% | \[82%,91%\] |
| A      |   95% |      less |  94% | \[90%,97%\] |
| A      |   95% |      more |  94% | \[90%,97%\] |
| B      |   80% |      less |  68% | \[61%,74%\] |
| B      |   80% |      more |  93% | \[89%,96%\] |
| B      |   95% |      less |  94% | \[89%,96%\] |
| B      |   95% |      more |  96% | \[93%,98%\] |

*Table 1 — Top-level calibration metrics*

From this we can also calculate the calibration of intervals.

|  interval   |            all |       bucket A |           bucket B |
| :---------: | :------------: | :------------: | :----------------: |
| 90% central | 92% \[89%,94%\] | 93% \[89%,96%\] | 91% \[86%,94%\] |
| 60% central | 71% \[66%,75%\] | 76% \[70%,82%\] |      66% \[59,72%\] |

*Table 2 — Interval calibration metrics*

For comparison the same experiment with humans[^1]:
- 98% interval, 57% calibration,
- 50% interval, 33% calibration.


A number of trends emerge:
- The overall calibration of the model is near perfect on this set of questions with a minor overconfidence for bucket B.
- There is an appalling directional skew for bucket B 80%. The "more" direction is overcautious while the "less" one is overconfident.
- Answers to questions from bucket A tend to be better calibrated than to questions from bucket B.

## Further analysis

The directional skew appears because the model having learned from pre-cutoff data is unable to account for outliers that appear post-cutoff. Some of these quantities tend to be record breaking - box office and awards - every year never seen before records are established. Additionally, for these, low values are common so the model's floor is well grounded. So we end up with estimations which on average are lower than the truth. This does not happen for bucket A because all surprisingly high values were already observed during training. 

Bucket A being better calibrated is a hypothesis I wanted to test. The next claim to test is whether this is in fact caused by the fact the model has faint memory of the information in bucket A. Unfortunately for this experiment other variables could also be influencing this: answer magnitude and question domain. The former can partially be fixed by only comparing questions with similar magnitudes. Doing this[^4] with our result set leaves us with slightly wider CI (fewer samples) but still a jarring difference of 
- A = 170/200 = 85% \[79%, 89%\],
- B = 104/156 = 67% \[59%, 74%\].

 The latter can be accounted for by generating questions from the same domain. This however introduces a secondary problem of keeping them obscure — otherwise the model simply knows the answer perfectly.

 The most interesting finding is lack of the human-observed bias. The model is mostly not overconfident and in fact overcautious for some questions. It seems that this frontier model has grown out of the miscalibration observed in Xiong's paper.[^3] Even the lowest top-level calibration of 68% is only 6pp off accounting for error and its median miss was only 7% below the true value (sorted by this overrun). In the cases where it is overconfident it is so to a reasonable extent with a sensible explanation (as is the case with the "less" direction skew).


[github repo with code](https://github.com/Arkantanti/calibration-probe/)


[^1]: Alpert & Raiffa (1982). *A progress report on the training of probability assessors.* In _Judgment Under Uncertainty: Heuristics and Biases_ (Kahneman, Slovic & Tversky, eds.).
[^2]: Tian et al. (2023). [*Just Ask for Calibration.*](https://aclanthology.org/2023.emnlp-main.330/) EMNLP 2023.
[^3]: Xiong et al. (2024). [*Can LLMs Express Their Uncertainty?*](https://arxiv.org/abs/2306.13063) ICLR 2024.
[^4]: This was done by calculating the magnitude range for both buckets, finding the overlap and only analyzing those questions.
[^5]: It can be proved with Jensen's inequality that rerunning to account for model variance can only tighten our current CI estimates.
[^6]: Mallen et al. (2023). [*When Not to Trust Language Models.*](https://aclanthology.org/2023.acl-long.546/) ACL 2023.
