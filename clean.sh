#!/bin/bash

find . | grep /node_modules$ | grep -v /node_modules/ | xargs rm -fR