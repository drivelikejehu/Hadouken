-- INSERT into Games (id, name, genre, createdAt, updatedAt)
-- VALUES (
--     "1",
--     "Street Fighter 2",
--     "2D Fighter",
--     '9999-12-31 23:59:59',
--     '9999-12-31 23:59:59'
-- ),
-- ("2",
--     "Tekken 7",
--     "3D Fighter",
--     '9999-12-31 23:59:59',
--     '9999-12-31 23:59:59'
-- ),
-- ("3",
--     "Dragon Ball Fighter Z",
--     "2D Fighter",
--     '9999-12-31 23:59:59',
--     '9999-12-31 23:59:59'
-- ),
-- ("4",
--     "Super Smash Bros. Ultimate",
--     "Platform Fighter",
--     '9999-12-31 23:59:59',
--     '9999-12-31 23:59:59'
-- );

INSERT into Characters (characterName, charURL, charType, createdAt, updatedAt, GameId)
VALUES(
"Ryu",
"https://vignette.wikia.nocookie.net/streetfighter/images/7/72/Sf-ryuold.gif/revision/latest?cb=20080211020008",
"Shotoclone",'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
(
"E. Honda",
"https://vignette.wikia.nocookie.net/streetfighter/images/f/f1/EHonda_breathe.gif/revision/latest?cb=20080212074417"
,"Defensive?",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),(
"Blanka",
"https://vignette.wikia.nocookie.net/streetfighter/images/1/15/Sf-blankaold.gif/revision/latest?cb=20080209060758"
,"Uh..",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
(
"Guile",
"https://vignette.wikia.nocookie.net/streetfighter/images/5/5c/Guile-oldstance.gif/revision/latest?cb=20080209192854"
,"Defensive/Zoner",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
(
"Ken",
"https://vignette.wikia.nocookie.net/streetfighter/images/6/6b/Ken_breathe.gif/revision/latest?cb=20080212074601"
,"Shotoclone",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
(
"Chun-li",
"https://vignette.wikia.nocookie.net/streetfighter/images/9/93/ChunLi_breathe.gif/revision/latest?cb=20080212074238"
,"Rushdown",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
(
"Zangief",
"https://vignette.wikia.nocookie.net/streetfighter/images/0/07/Zangief-sf2-s1.gif/revision/latest?cb=20080211044340"
,"Grappler",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
(
"Dhalsim",
"https://vignette.wikia.nocookie.net/streetfighter/images/c/c6/Classic-dhalsim.gif/revision/latest?cb=20080209063752"
,
"Zoner",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
);