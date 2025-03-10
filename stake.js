const axios = require('axios');

// const cookie = 
const map = new Map();
async function main(){
    const response = await axios(
        {
            method: 'post',
            url:  'https://stake.bet/_api/graphql',
            headers: {
                'accept': " */*", 
                'accept-language': 'en-US,en;q=0.9,nb;q=0.8',
                'content-type': 'application/json' ,
            'cookie': 'fiat_number_format=en; locale=en; _ga=GA1.1.660589663.1728408756; intercom-id-cx1ywgf2=73e08471-9683-4682-981c-637ee01d7cc8; intercom-device-id-cx1ywgf2=908b38c8-377d-4a93-a5e4-91a55d2e719a; cookie_consent=true; sidebarView=hidden; casinoSearch=["Monopoly","Crazy Time","Sweet Bonanza","Money Train","Reactoonz"]; sportsSearch=["Liverpool FC","Kansas City Chiefs","Los Angeles Lakers","FC Barcelona","FC Bayern Munich"]; sportMarketGroupMap={}; oddsFormat=decimal; session=41a2a3830ded54433ed0e1d53eb40c0c59b0b74b3a5bbcae6d365e83be6db943b69d8e38bc9dab15eb23f074ec256ffb; session_info={"id":"4f0fb0da-3e4b-4097-81da-beedf50aa2c6","sessionName":"Chrome (Unknown)","ip":"171.61.249.254","country":"IN","city":"Secunderabad","active":true,"updatedAt":"Sun, 17 Nov 2024 06:30:12 GMT","__typename":"UserSession"}; hideBalances=false; fullscreen_preference=false; leftSidebarView_v2=expanded; _hjSessionUser_5261158=eyJpZCI6IjU4NmJhN2M2LTdhZTYtNTU1YS1iNjc4LTJkY2Q1NTFlM2RhOSIsImNyZWF0ZWQiOjE3Mzc3MzEwNzk1OTQsImV4aXN0aW5nIjp0cnVlfQ==; currency_hideZeroBalances=true; currency_currencyView=inr; cookie_last_vip_tab=progress; currency_currency=sol; cf_clearance=RTwWG59BFGnw9oUiMl18CqqYKk0cIoBBmy_cvihEpPs-1739455666-1.2.1.1-tFLVulNJS84qycYk.Gvc8qksRKP5WpB7HloeK2_Ma8z9EBsGPXiwWTThUj32Se4DWIURvHeIemXYH1Jhyu4B4oMf_PVJV5IURWlVtk2XnzXCtS2hhDjjLzX.VeOe8N3l9MzKKXrFQp44HvSEuPEOoWnVCv0bd0hp2H.6xNwl_pQMv77PheXgPH_.Z0vTCvYbT5Mtdgi1ZpKKm6I.1qjOaYUzcRzxxh8hwtWTVOluPFkLgijl1Av_.rDxqfGI_Gkfsrymn0tkza9L0hxqL9evyR5w4NNMjhOi9cCFNV.BwNaPuumVhFAGuxvvYQlp0vwREQwt9wVrsQySBIh7gTqUgA; _cfuvid=TTsLru9Eph.WAO89ETAMAwjWLpgvwmyJ9Ty8QEC5fsI-1739455734883-0.0.1.1-604800000; _hjSession_5261158=eyJpZCI6ImExYjY3NTQwLTUyZDMtNDIyNC04ZTJlLWZkZGEzY2E4MzhhYSIsImMiOjE3Mzk1MTY4NTA4NzksInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; intercom-session-cx1ywgf2=S0dGblpDRWtkODVTN0pNTVVqOTJ2aFZodE1DeWlmbk44YUc2em1aRHgzdUlSd2UxQWxEWEdMdk5NaVpOUy82Y2Ewa3hvbWNJTVk5YTUwZEpLVEJEd0dIWE5OTHZLWWZuMzBuTTB5MGFzOUk9LS1RTE5haDJPN0I1UThDZTNnWnNrcnhBPT0=--508fdf6c46d0c44595196663b2579a2b165b7e28; __cf_bm=gdn9z06QrKCjT3S6ins6IXjf5OF7ljBtkUKAtgcYSMI-1739520481-1.0.1.1-P.1gq.eKeLYvzy5qDUWVZMiiyqWDzx7UbqbN_.6uMiy8RpVwwDTT1GVXs23Ysss2oXhaNg048lwJj5yaYzsLWw; _dd_s=rum=0&expire=1739521833075; _ga_TWGX3QNXGG=GS1.1.1739516850.62.1.1739520933.0.0.0', 
             'origin' : 'https://stake.bet' ,
             'priority': 'u=1, i' ,
             'referer': 'https://stake.bet/casino/games/keno?operation=deposit' ,
             'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"' ,
             'sec-ch-ua-arch': '"arm"' ,
             'sec-ch-ua-bitness': '"64"' ,
             'sec-ch-ua-full-version': '"132.0.6834.160"' ,
             'sec-ch-ua-full-version-list': '"Not A(Brand";v="8.0.0.0", "Chromium";v="132.0.6834.160", "Google Chrome";v="132.0.6834.160"', 
             'sec-ch-ua-mobile': '?0' ,
             'sec-ch-ua-model': '""' ,
             'sec-ch-ua-platform': '"macOS"' ,
             'sec-ch-ua-platform-version': '"14.5.0"' ,
             'sec-fetch-dest': 'empty' ,
             'sec-fetch-mode': 'cors' ,
             'sec-fetch-site': 'same-origin' ,
             'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' ,
             'x-access-token': '41a2a3830ded54433ed0e1d53eb40c0c59b0b74b3a5bbcae6d365e83be6db943b69d8e38bc9dab15eb23f074ec256ffb' ,
             'x-lockdown-token': 's5MNWtjTM5TvCMkAzxov' 
            },
            data: `{"query":"mutation KenoBet($amount: Float\u0021, $currency: CurrencyEnum\u0021, $numbers: [Int\u0021]\u0021, $identifier: String\u0021, $risk: CasinoGameKenoRiskEnum) {\\n  kenoBet(\\n    amount: $amount\\n    currency: $currency\\n    numbers: $numbers\\n    risk: $risk\\n    identifier: $identifier\\n  ) {\\n    ...CasinoBet\\n    state {\\n      ...CasinoGameKeno\\n    }\\n  }\\n}\\n\\nfragment CasinoBet on CasinoBet {\\n  id\\n  active\\n  payoutMultiplier\\n  amountMultiplier\\n  amount\\n  payout\\n  updatedAt\\n  currency\\n  game\\n  user {\\n    id\\n    name\\n  }\\n}\\n\\nfragment CasinoGameKeno on CasinoGameKeno {\\n  drawnNumbers\\n  selectedNumbers\\n  risk\\n}\\n","variables":{"numbers":[8,9,16,17,18,22,23,14,13],"risk":"high","amount":0,"currency":"sol","identifier":"ywwg2jV2Mfnj6nVMxvPVK"}}`
        }
    );
    console.log(response.data);
    const arr = response.data.data.kenoBet.state.drawnNumbers;
    console.log(arr);
    for(let i=0;i<=arr.length;i++){
        if(map.has(arr[i])){
            map[arr[i]]++;
        }
        else map.set(arr[i],0);
    }
        
} 
// for(let i=0;i<=1000;i++)      
    main();    
    
console.log(map);
