#!/usr/bin/env python3
"""Static preview server for personal-site (run by personal-site-preview.service).

Same as `python3 -m http.server` except missing paths get dist/404.html,
matching what real static hosts (Netlify, GitHub Pages, nginx) do."""
import functools
import http.server
import os

DIST = "/home/vibe10/projects/personal-site/dist"
PORT = 3001


class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404:
            try:
                with open(os.path.join(DIST, "404.html"), "rb") as f:
                    body = f.read()
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                if self.command != "HEAD":
                    self.wfile.write(body)
                return
            except OSError:
                pass
        super().send_error(code, message, explain)


http.server.ThreadingHTTPServer(
    ("127.0.0.1", PORT), functools.partial(Handler, directory=DIST)
).serve_forever()
