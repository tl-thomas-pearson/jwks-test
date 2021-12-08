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
      "kid": "4Rr1h6Jf27kLhkL_Hy7OhBDVY8HZNpWpIYn2OBscnEM",
      "n": "sxFzyAtuNNj5axmdmzIGQNCUlDt_ddkZokW02sUfnJ_FKafBO2dLWozxPCq0wXU1vMHY6roec1Ub4Pvr7uEhoLXoRttqCKnJxcpHCM_Y-Q21QZImjCXgioWIR3eS-HkJVtL-0PTeIT7tvSUltnnh4X9fDvJ2Wam-YOS_X7k7kfN6tHG_UcnChQKN8u3A0n2_Ab4KO-Lm0v3xxTNoPYy0bYg0uwytFJWsIO3AhPnUNjlPd5y-RCtEoD51mdlGyAYKhPqaT8dd23zWhiJx8cmItobrnzWC17bFeuWhzYk79HZ5ibnCwLuPbaZYxKPQinJTjeJ879NzmfNbBQpdFK2X1Q",
      "e": "AQAB"
    },
    {
      "alg": "RSA-OAEP",
      "use": "enc",
      "kty": "RSA",
      "kid": "3dcd200a-8509-4d46-b99f-d42173d42e98",
      "n": "9zyIbjRSUzI-kSwnXCrob0PZRDVb_2qRo3uhxqVdtClMNm7WTfdP325MPMRxBuIm7So9ns9ut2hSZYexF1FPFAX0tU0k7-EVDA5CYq0Z1EZRyTTwf4DeP_htdXuWJSScMZK61a33yBkc72nNKLqliGYh7tTrVm9Z-nNR9bJi7W6u9_Fs2ag65dYUYwLnKRb0F8r3lvv10RRCgGLNOV4v9LOm9Df6YS0rtXIcMlQbQMpBaAxso7WjNxsn0MYjW7M_CjmzVHXFlvDIbhWxB9Movo5dtL_GNKLirZ96Ouv94E5UqAPlj5zF7aPlGJxBzE0s9sXdeTcrYRdwVSH-qWLNZhjTdGjX7poC30PysPevzvG0Ek4yxXiLEcYrEc-17mtamBeoqXZEhehLIqalWGqbU8Nv5eculk6odw-MNV8GV6opmm7cqT1ON-NbGt5LZ1T0cvIKnmNADPy9tu_SmuIUDiDNLod3mNKjumFl8ZI9eQEDbeUHwry_zn8XZoR4SpDeJlYq0ZU36F8cGISka0zbLLVg-6x3UtHE2umuQmwECvOS7uiSBj_DxA-V73zPr-_Xil7dSLnbbm5D0TIyDNvoIl1mQJ-ZGCvpi5erI_KP2Tzp1WyMUpAevVgdPFgl3LgRkNAi49-gYSEL9Y59rJCb9FB4iVFkhi2m8ydXZqeea90",
      "e": "AQAB"
    },
    {
      "alg": "PS256",
      "use": "sig",
      "kty": "RSA",
      "kid": "80214c76-8205-4e99-a22d-f83725cf643f",
      "n": "vQwBDxbEZd8uB-LTBlm_1vcaHpZoBxAsYM_7exyvl9tBVxMs9kmC0eBn2uADrsAFmL7azCCCpVFHRXW35chP9gXvD5qS9qwcGkLvCAsqjQbHCBAvwrC7g3y1nkoSU1tf4JasZjNS9Au8MwNTilHIZyzOHIflbGI7moPhLiARep6aNLb7M7wTMZwZ86LXKD5hz_TTgCyMnbriRQ4HpBdG2I_hgkIl43jY3Eq4tdOg-uQOZgRSV2gaZqamUd7zb_2U9wrE48wl_bq_OPPwQZ0lnSYqOoY6yj9UmjCs-G53sNqGdRv-_KyQExsQsZvCVlC8ch_JOJbhCdtxkV1LfRyjzDVvuSdpUAR8wtJqNJ9N7JnUzUH0PgGOt0Fq5TNB-X40Rs47FsdEJoeHjZmxvQqcBEoJHJ8GLQSbw16gdukc6tIHd8WCntgzY6yXhMjMGAphy9-jlAC6UhpEr_SLDJtjQsTKCN-CBrt5GD7KZo0UO3hR5qlUAbGC85oWM_XGhx8tqG-4PzTJozFTE1LajhYi2R6CUO9SBP3r7Zg35sTRJqhTPdpZ0CdD_LHZmw4i3tX26Ij7KYec4Qm4c5-ra6jXkUi5N705S7SRWWm4eV6CGFWRIa5iOIianu7hLn11Orkk8I-69k2TTqs1lMJVGq6EuAEhEmQTxilNSd1wdhmZqxs",
      "e": "AQAB"
    },
    {
      "alg": "RSA-OAEP",
      "use": "enc",
      "kty": "RSA",
      "kid": "744fe33b-0eef-4a53-9bcb-688d6a0e704d",
      "n": "3oDGPW9FhZD3d1xd4nn8TtdM9XMPTUHp9bt_lYeAfKVeQNBIdbjy1rwYhR77bJA4CeK4Xb6wn8XLYzXnobsfsvSJ7P_YA7ehL1_oox3Ma0kwNe3cwwVhRcD_-Ve-OamqGffufgVA52FRBhGaYvgWbipIGlhUQNgT2K49ASPVSkHmAviguhI7liNE0yQBMwZNECP6U82O3ANA5HcbyY2xVXGeYpwGk6-o7GkfRlaDImrnUev-QS3AfomMZHFqNHjCP60-HmhqgAPcpBWZFbQg8rqcSZPaYTAbEgXEq_JJxtswKXRvT7x3AfsPZA7RdkvDKOz5aJyFGV98LhnH_u4yvjhaGZaAXbx1DqyiNPaTTfJ_Obun6rWOiQRYsGmz9ZvxIvOahDRMDHAyzosxLPGtKPgHEq_MurEem_SsgcQ35uNmUqZt5fk1QRH9w8NdJnAVwg3okmcqH5XgKPQn5Xniln2vPieH_RsoqdI1oHunoqsHUVUCVspf8RJVFwjM1YJk8kmWhbubogISxF3vI70x0Ogjfl0WyXQJhz_Urd0FZmYHIANmxEd6DVHS9noxw7BUrKSUVYjeM4tlC4UHxZQmM4Oe-0C_xsi6jAafQjehEbg1qajjxnPYqIwXJDNFsvLsqS037Otb3g2OSr3QPBaPNM6fpVKo30pSto8Qa_zepUE",
      "e": "AQAB"
    }
  ]
};

module.exports = jwks;
