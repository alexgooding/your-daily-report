FROM ubuntu:latest

# Install MTA (msmtp) and configure to point at service account SMTP
RUN apt-get update && \
    apt-get -y install msmtp
COPY email/conf/.msmtprc /root/.msmtprc
RUN chmod 600 /root/.msmtprc
