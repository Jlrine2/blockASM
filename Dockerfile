FROM python:3.7-slim

RUN pip3 install flask

EXPOSE 5000

WORKDIR /app

COPY . /app

CMD ["python", "app.py"]