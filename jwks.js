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
      "kid": "1c9ed419-c878-4c51-9ff8-68011f52fe34",
      "n": "1BOqZV6SAvqtNF-F1ctMXTszFTphVXmqY3BR62XvzwINzNXrQbdlRVpZblEjr04J11o4Ggnno804A8qUYnJFaSja6rD9o-LWE9f5cUzN9n_iWnhIEw9Oy3O__M51daQ_1GHwkPo6qeTaAYmtKFF0Ttd0vpbAeQAEvRIpkAxFsRmM8di59AxMHZlOTJUkrLjx8OPwSBflDYjBmP73feCHGX4ApMTg-lOE1pETqAz-xs5ddmHNJaB3eRNU8jAYyOY28-lsfPA6UmH2L4fhU7yfDcJcyFqEBfGxn4G4w82VgcgBHJ-A-KT8m6O07_0yEoP1nLtt58Crt3tejwYlSUdQ8Y1ThWDWY4II7OjwvEB9zqBKA6ZcMN6Yzuxey5nqeFywuns9ELEMUcqK81ANLGtDCFQiRm6EYEVYPVFDwZVcR33Apa294N2KsQLeUy9hbtAZ803RhPvxs-J8peom-ocxZOOxU-Onn5EE7VWXUSeA3uRizTBmQ0NjPmHss_uI-H0yGy3uWsraHlAgJa8Bh5So8JjHz_pXgn_lGLCu3NQg7-6VP_BD6NE3LKQat-26CxPG3P3kk4-gRnF0941uuXkYL5C-bRyXPrY7QesVd8OVAPjlOxPkP7o_MPb6LLZBxUhfFz9muebRUcl2qKHFjxfvfCk12Q1CphVtt6rPF-hOP6M",
      "e": "AQAB"
    }
  ]
};

module.exports = jwks;
