# Python 3.10 베이스 이미지 사용
FROM python:3.12

# 작업 디렉토리 생성
WORKDIR /app

# Poetry 설치
RUN pip install --upgrade pip \
 && pip install poetry

# Poetry 가상환경 비활성화 설정 (Docker 내에서 직접 실행하도록)
RUN poetry config virtualenvs.create false

# pyproject.toml, poetry.lock 복사 후 의존성 설치
COPY pyproject.toml poetry.lock* ./
RUN poetry install --no-root --no-interaction --no-ansi

# 나머지 소스 코드 복사
COPY . .

# 포트 설정
EXPOSE 8000

# 서버 실행 명령
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
