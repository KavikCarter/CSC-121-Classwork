#!/usr/bin/env python3
"""Regenerate the TRIFF QR code.  Usage:  pip install qrcode pillow && python3 tools/make-qr.py [url]"""
import sys, qrcode, qrcode.image.svg
from pathlib import Path

url = sys.argv[1] if len(sys.argv) > 1 else "https://www.paytonhood.com/triff/?utm_source=qr&utm_campaign=triff"
out = Path(__file__).resolve().parent.parent / "assets" / "qr"
out.mkdir(parents=True, exist_ok=True)

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=40, border=4)
qr.add_data(url)
qr.make(fit=True)
qr.make_image(fill_color="#363D4E", back_color="#FFF4EC").save(out / "triff-qr.png")          # print-ready (~2000px)
qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(out / "triff-qr.svg")         # vector for designers
print("QR ->", url)
