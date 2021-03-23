# 👋**Toy-Backend**

Typescript+Mongoose로 만들어보는 쇼핑몰 페이지(크몽 참고)!!

게시판 API, 결제  API(BootPay), 로그인 API, Heroku, Mongodb(Mongoose)

## 👉**Getting Started**

- 실행

```bash
npm start
```

- 터미널 화면

```bash
start5000
(node:18864) DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version.
connected
```

로그 설명
start{port} → localhost에 연결됨
listen이라는 코드를 쓰는 것을 추천 안함 → 에러 아니니 걱정 No! → 무시
mongoose연결되었다는 의미

- [localhost](http://localhost)에서 실행 결과를 확인 해보고 싶다면 실행 후

    [localhost](http://localhost:5000/):5000 으로 접속

---

## 👉Build

- 자신의 코드를 적고 나서 배포를 위한 .ts build **필수!** (ts→ js 로 변환되어 /build 폴더에 들어감)

```bash
tsc 
```

- 아무런 결과 로그가 안뜨는 것이 맞습니다. → build폴더를 확인해주세요!
- 주기적으로 build해줍시다!

---

## 👉Heroku

Github 자체에 연동 했기 때문에 따로 깃을 열어서 하지 않아도 됩니다. main에 push하면 바로 서버에  올라갑니다.
**서버(main)에 올리시기 전에 branch설정을 하시거나 토의 후 올려주시길 바랍니다!** (에러나면.. 😂)

1. vjsel 프로젝트로 들어가기
2. Deploy 메뉴 선택
3. Deployment method → **Github 선택**
4. 맨아래 Manual deploy → DeployBranch 클릭
    - 브런치를 나눴을 경우 브런치 선택
5. build 성공 시 view버튼 클릭!

## 👉Heroku Error

build성공해서 view버튼이 나왔는 데 페이지에 들어가보니 페이지가 안뜬다면?

1. Heroku CLI를 다운받는다
2. 컴퓨터 터미널에 heroku logs --tail --app [앱 이름]을 적는다.

[Heroku Error Codes](https://devcenter.heroku.com/articles/error-codes#h10-app-crashed)