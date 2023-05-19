const cors = require('cors');
const express = require('express')
const app = express();
const axios = require('axios');

app.use(cors({
    origin: '*'
}))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/get-route-fly', function (req, res) {
    console.log(req.query);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${req.query.cityFrom}&destination=${req.query.cityTo}&departure_at=${req.query.dateFrom}&return_at=${req.query.dateTo}&unique=false&sorting=price&direct=false&cy=rub&limit=30&page=1&one_way=true&token=YOURAPITOKEN`,
        headers: {
            'authority': 'api.travelpayouts.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en-GB;q=0.7,en;q=0.6',
            'cache-control': 'max-age=0',
            'cookie': 'tp_referrer=aviasales.ru/; ad_source=support_ru; _gid=GA1.2.414579068.1684133336; _ym_uid=1684133337635751030; _ym_d=1684133337; _hjSessionUser_302666=eyJpZCI6IjU5NTgwZjZmLWYyMmMtNTgyYS1iYmQwLWE0MzM4NzFhNDc0NiIsImNyZWF0ZWQiOjE2ODQxMzMzMzczNzQsImV4aXN0aW5nIjp0cnVlfQ==; locale=ru; app_referer=https://support.travelpayouts.com/; regpage=mainpage; uxs_uid=c006ace0-f2ec-11ed-ab2f-7df329ec69fe; promotion_code=; marker=direct; partners_marker=442319; know_about_closed=1; app_remember_token=06568048cd511d4997d28b1bbad94d1d; _ga_XC952XPR7M=GS1.1.1684133414.1.1.1684134207.0.0.0; onboarding_closed_step=TOOLS; refresh_token=wMG9cd3DU1UGIMhpr-VNUEgLvE_blvjYoI8kHLzGD67CWh4Kpg5aOA; ad_content=articles+203956163; _iidt=XSnK2buiCTK4vE8Ve949bFyToM2SjpdmCayjYcqTH1KbOAxxH8jv0aANmJ0fTwS1Y+78DSHb916jnunnvQfl/I2akg==; _vid_t=qoxCA4ftFhzEGxaTIGv6sp80f2cL4DAFqUzzuXSlZvg+/r3/yCulrSShxaTJVspvx11qS6VXFz+Yl6e5UFpa4T8aRw==; _sp_ses.2042=*; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InI2Ukl1WEdiV1o0b2o5VmxMNWNEVDRhLW1TZyJ9.eyJhdWQiOiJiMGUwMmZjYy0wYWI0LTRiMmMtYTE2NC03NDI3NjI3ODNhNGUiLCJleHAiOjE2ODQzOTI1MjQsImlhdCI6MTY4NDM5MTYyNCwiaXNzIjoidHJhdmVscGF5b3V0cy5jb20iLCJzdWIiOiIxMTFhNTE3Zi0yODk5LTQxOWMtYmU4NC05OWI4NDUxZjcxNTAiLCJqdGkiOiJjNzNjNzYzMi1kN2E5LTRjYjAtYjdmMS04NGJmZWFjOGM4YzMiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJSRUZSRVNIX1RPS0VOIiwiZW1haWwiOiJrb2huZXY4NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImtvaG5ldjg0QGdtYWlsLmNvbSIsInJvbGVzIjpbIlBBUlRORVIiXSwiYXBwbGljYXRpb25JZCI6ImIwZTAyZmNjLTBhYjQtNGIyYy1hMTY0LTc0Mjc2Mjc4M2E0ZSJ9.f89cqAQm6t7aaKX997nhfQh9O2u6wZEYv-vJWe487hQKqjvahno5b7acQR0zRLhDuXXGL6A_sxzXxae31SGkp1lBftcI0lElpnJgqibpLvQnAHQXYcC_YUwIdphfiNO7kNSLJ8Py5vlEPPrzGaRxQyLnqK8IimsPLHW1AOQoYAGrbARaBlSBFe5TS_I9fG7VFq2bCrUmzine-HvufEXqyfb4zyj-aKIB_hIQ_jFAZGVNR61A90ZcDdhfK3PI65jcTGdtPVdaUijrb7AW7cdTQHIrnYIUb_Q3rI54ey_nFIjSxv0pysRAAwfh6o9UIdxRGsqwOVsibJxAmevYzrNoAg; _ym_isad=2; _ym_visorc=w; _hjSession_302666=eyJpZCI6ImM1N2RmNGY1LTEyNWQtNDAwYy05MmViLWM4MzcwY2Q5ZjM2NyIsImNyZWF0ZWQiOjE2ODQzOTE2NDY5MjcsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _ga_1WLL0NEBEH=GS1.1.1684391644.4.1.1684391678.26.0.0; app_locale=ru; tp_session=true; _sp_id.2042=e1b50c79-6264-461d-b3e1-eef7ecb23efc.1684133336.4.1684391683.1684306606.d980447c-f29d-4251-8079-4bb5a3937b61; _ga=GA1.1.1465209428.1684133336; _ga_Y3REWYRN9K=GS1.1.1684391626.5.1.1684391682.0.0.0',
            'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
        }
    };
    axios.request(config)
        .then((response) => {

            console.log(JSON.stringify(response.data));
            res.json({ result: response.data })
        })
        .catch((error) => {
            console.log(error);
        });

})

app.get('/get-route-train', function (req, res) {
    console.log(req.query);
})

app.listen(5000, console.log("Server work"));