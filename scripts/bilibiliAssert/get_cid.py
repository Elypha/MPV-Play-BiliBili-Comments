import argparse
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("-f", "--file", metavar="", type=str, help="file path")
args = parser.parse_args()
file = Path(args.file)

danmaku = (file.parent / "danmaku.txt").read_text(encoding="utf-8")
for line in danmaku.split("\n"):
    filename, cid = line.split(",")
    if file.stem in filename:
        print(cid, end="")
        break
