const jwks = {
  keys: [
    {
      "kty": "RSA",
      "kid": "gBdaS-G8RLax2qgObTD94w",
      "use": "sig",
      "alg": "PS256",
      "n": "o6nov6WjR9E-wcVKCSxjfKE4qaPaRBmblLnRNAhfwMUPNyCHEMdeKLmn-hyF6xxDt0G1A8g2gJnGs7dRc7SpaJbQRtq9dnkXpscshxMs1qrRLO0pfPkpjG4VpV8UpQqrGDkzy_8Bw7XKlJVCp1CE-BlTVZ8qyRLngMYWvsMSaLA-lGkB65X8s_CZrOoXJQVOlVfeWQTWgszAQUWBMlZrVYR-mekZE-BNniysvQXqwfsO-4lxC0RxLZ_QSIHc3bvkaFmA4HowcbrS5twgxpi4it9lmCNGjyPoPJ3PSTI8aBzmTYVjnRabVHujig2K4_TiLnz7canjTO-X0UEPKfwA-w",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "enc",
      "kid": "PstJP83mC49x2q8dWBSqXp-ECAVFcSBUaBhW9IhlPsE",
      "alg": "RSA-OAEP",
      "n": "r6MM3ltYF17ItZBiQT6bbUn_9x73uirf_3KyjOOHz3efWn9pZU2lOAKWbEnFblOO1ZX-CBIVsfq9RCM_duAoGnOflaHTrJeeRdEfKj-ELDZ6kRsQpLKLsFqIJy06zjRnupBBnc7nhJTdeJJD-Wm7p6ZgUUV1jb7QFbIb5ofSCgJLVX9989Geb0tuM6_lhoUpzdBR3GcK7G1P9C_r4miVPdtRaCiQjtZGMuMAbe0IQbJbhT35iBP5pj46CZmrCNZB9thYiYO1VkD2ltTu9mniA9Opg806hq1zrN-jokMrAA0lNZqc4nT9R8RHqO8NiUZWoqJW-SEFSMhA4ja2dTi14w"
    },
      {
    "alg": "PS256",
    "use": "sig",
    "kty": "RSA",
    "kid": "4ad9c422-ed27-4e73-8143-d4ee6c69a539",
    "n": "6wWhXd3NhM8IiIzcdEE__gWh8YhKsL9HRjBSLRcbo1JDtT4J95ULy8UaMBhZGtvMgBRUSQg_0A9D5gZBrmj10aIr6gYMEWeD4Vxum2w1sE0nRziJhhIW7Ji9uVZKUQHX0X_3AHWyMU_YB0YpyxqDBB_EDcMJ8o7av9WC6BHh8FNQExJ-UxMrxGTs4YojnYQV_dvINRAvCp2MlSNJz143eODgN7-8rE_LTDHVSKIP7TRH5snLpxC8fv6tWacrlsR_2aps41EuL_QdQuSd9VTlcuR5I-rEH3n06DJIWuc2cXviPn5svosaSj1fOPSTfmEnLAV95pUlG-ofnHPPjqipQyYg_9pJBh8wCilc5GBQOylTcdTNLLd_PFHa62GUOMACXrF9YiZHBY81fcqDDxzLXiIQMunKsWyhhjVVpfW6zl5wnfSTcR6ihWJ_V2_WCMwaEpaN1qBSIOK9IQj9L9MeG1OIRA3C1FbEFgU-p0ivKE9oTYxrIC60RYBIm7Dr72nQCngDJxeTBBfe75DXqQMSsmi1mrhXcTBbpvlmuZqAMEU8GeR0QHY_NzPdcFbw9Lz59izNkQzV4v73HTUQGZ18Poa_XcxWhgAnw9RGf7BsRYRHTolSOz0UdzgvfhNzf_OsHiJlAl55pGqSZ9ReLl9-6dsfjrVP_YPmzbPz0kpG0zM",
    "e": "AQAB"
    },
{
"alg": "RSA-OAEP",
"use": "enc",
"kty": "RSA",
"kid": "a59923c5-2377-48d5-b20c-76e470d8df23",
"n": "x_Tz5PZ4RFfHHH_3W40G9LUswwjrQmfuQ-u3T-IRDRNbCyh9WolCdxXlFvnpZnvozEGC_lEJne7cn-Sme_RlNDRCeW86lUzVkYYCXQ4_FDfV6Ec3zsFB4FZ-DVyuagDuQrtUvO89rbnVN_2myqKcQBOrlrpUDUzHBoUD2Ou2y11Yj3a91t4sMjgL0V0duveR52mL9nnABP-d1xQN0tLtlgz_Y9MphR4Gg9gev4KA3FnVnlu-R9vhEw704T13pi7MOH5y28Z6ur_RL6qJZumo4ja8k6H8LgEQ_ZawvsH2FCNaNzai2OVLXbcWB4t4CpsgK_WTmNRRZ1bpeuFqBOGHpNJimiyqiQIUxCUI3IJmihJeingwFVZnyQvXnuS5mjnhxKE_9tYje0gRjkzFOxzo0aUKXfp_QiM1TM4PsBKqeeJpYfk3ZqLlBWM3BBSGoElvgCPGGn3LcpJoXICoDYX0BVu1TFJraLSIUQb9lTstLTuyB_Lt5ClGrStJFC8v7ILClqjRWf1nDEgNT3MKYM3yf0EIWlT3k7NcB-yoH4ZJBKW53nvqrvjKcniyecHO8Ru7nuqhDtX0hUDr6WJVM7xYQIjHRgYh_Ob_MdZ_6QWgW5FOzqimS0Wq5GpNY38ewvd9RkbmY504f1vAG8kRIn03HanwMuQViiyPCjrBxdy_7QU",
"e": "AQAB"
}
  ]
};

module.exports = jwks;
