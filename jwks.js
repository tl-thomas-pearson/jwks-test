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
      "alg": "RSA-OAEP",
      "use": "enc",
      "kty": "RSA",
      "kid": "5a92f6f6-293f-4979-a488-c1be2abb55d9",
      "n": "oPUl1kPvgOoTeH51EWljkrF4alyrwlzZmpZkQ_fjHkNL1bBJ3H2vROSWAfq1l3hxvh-BGlS2iHg98EyBGe1pAWfgq1wFRoD2Ikes5UfrRmOv-WiaHl7SpU1D_5r9d9jyrP12XNTLEY7ElIqN_iKgxdXPeSK2a4dijMILID3gYUsgNtdTfzZ6a_llZDoiGyShASnTD0V8yNp8vxZz_BY3P966RdUEoavli4GSx_vQP_wWG9ZV7A5rqHsNXiEqRf-iO5nT2A0VBN51Q9_Jzpv9gCXBvQh2nfZKUqJDDZXaWgchtLVrFy6Hy94bNrKfm-utaUl-XgWbvXoy0zcwXPJnbwfSXEUWfeHXR_unragCwkcq7HbL3f4IFzeAGtc4LzgWSEFgmE_F42A-n22vOjaREqbxdowJRojQURPGhxtiLT1Oc_a-f0_Tp-zmBLGoPyNVNsfnkKwAAtihTICnR1Ee4EHoL9dNm3GcPaU4jlzskqHXXEB6hhXBhWGj93FbnAtupk5qOw2NC4qhnQO8VNT7qQ7YW2GU_ZY-fhYvEal9ZHGX6ZLfftXFoml38QnHkM1tyh824erkE-PWqxSLhSkIk5WJTkLPRvK10niXgxFR7-2pvlFFRhoeh_3xZ_gMN8yoZfuIxDmePGEzFueLrRiGOk3c_uCK2F25bl8u23Jl9oc",
      "e": "AQAB"
    },
    {
      "alg": "PS256",
      "use": "sig",
      "kty": "RSA",
      "kid": "68b32c90-faf2-497b-b785-f653ea61086e",
      "n": "ojiNjbHKu_ScBSJH1ttsu2aHx2zBc0Qj8NYRZ9rLOX8ldM-MWEuAUMH7FJ4MCCQXDaLXgJ6q59MsNVrNDtEGlsasxPJNaENOQ_pk7maql5kfJQayRLQcA7aVR21p_v9JKa-zj-sihIOg5lse22FhqJW7taL-aE5r7o0vwryHH2iPnI3LwcslRiUpF_jz7QPA_g1GSxUwR7rzxlD9-dxCZ-32uuH7m74gHGbHXjCfXlOk34EDjHrp9WmeeV4D7KeHgpRl8htgt0zU5fFp5rFSAXas3paShwjJg1n1zq4WFiYaTrh12rDcYY4WS5rotp8rocukVmc1mOmCG6QhFQRQle5I4ac7hDs8FWO63Q61RFq3zrY9CIwbkyuYeXoxAGlbIlB1bKdsGdBAJqXVef4YveNl-wHgLSLvWfH2z2Pj_GFRqjl5sTqlHByIOswcG4g1p1z_YBENuiaRXlCPWdqTiJF4-zOq9Uwpq--qj2OsUfEOOj_xVmnph8QMoth6NNE6CHbKWy38nAIh6Oa_uvefdM1ycCfgDUjazzUjd12lL7CLAJyo5BclfY-uZGH7HpWkXeF_-npVPaog8r4V2etmMjWBKkzC3l-uE916VBlyw2aqu0yUZFgdC5BCUtZNsYimcl_OuYK3ZCIzlPLLq7cRWYAzlHECBM5d7IE7iX_yPeU",
      "e": "AQAB"
    }
  ]
};

module.exports = jwks;
