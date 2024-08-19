#!/usr/bin/env python

import json
import json
import re


def main():
    with open("grimoire.txt") as fp:
        lines = [line for line in fp.readlines() if line.strip()]

    for line in lines:
        if line.startswith("#"):
            continue
        match = re.search(r"^([A-Z][A-Z]+)(\s[A-Z]+)*\b", line)
        if match:
            print(line)

    return


if __name__ == "__main__":
    main()
