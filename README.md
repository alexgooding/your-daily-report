# your-daily-report

## High-level Requirements

### Configuration

* The Software shall allow users to configure their report options via a UI.
* The Software shall allow users to configure the frequency of the report. The default frequency shall be 1 per day.
* The Software shall deliver reports via email.

### Report Content
* The Software shall report top news stories at the current time.
* The Software shall report the weather at a user's location.
* The Software shall include a unique inspirational quote in each report.

## Prerequisites

* Docker
* Docker Compose

## Usage
`docker-compose -f docker-compose-<dev|prod>.yml up`
