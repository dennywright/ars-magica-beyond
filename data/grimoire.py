#!/usr/bin/env python

import json
import re


def main():
    with open("grimoire.txt") as fp:
        lines = [line for line in fp.readlines() if line.strip()]

    for line in lines:
        if line.startswith("#"):
            continue
        match = re.match("[A-Z ]+", line)
        if match:
            print(line)

    return


if __name__ == "__main__":
    main()
