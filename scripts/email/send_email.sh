#!/bin/bash

recipient=$1

echo "Subject: test" | msmtp -a service "$recipient"
