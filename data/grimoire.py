#!/usr/bin/env python

import json


def main():
    with open("grimoire.txt") as fp:
        lines = fp.readlines()

    for line in lines:
        if not line:
            continue
        if line.startswith("#"):
            continue
        print(line)

    return


if __name__ == "__main__":
    main()
