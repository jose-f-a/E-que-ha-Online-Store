--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 13.0

-- Started on 2021-02-15 14:51:57

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4006 (class 0 OID 33101)
-- Dependencies: 236
-- Data for Name: carrinho; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrinho (carrinhoid, descricao, userid) FROM stdin;
4		1
5		43
6		44
\.


--
-- TOC entry 3988 (class 0 OID 32951)
-- Dependencies: 218
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria (categoriaid, nome) FROM stdin;
2	Casa de banho
3	Interior
4	Jardim
5	Cozinha
6	Casa inteligente
7	Mobilia
8	Criança
9	Eletrodomésticos
10	Iluminação
11	Lazer e viagem
12	Verão
13	Inverno
\.


--
-- TOC entry 3991 (class 0 OID 32971)
-- Dependencies: 221
-- Data for Name: categoriaproduto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoriaproduto (categoriaid, produtoid) FROM stdin;
2	16
2	17
2	18
2	19
2	20
2	21
2	22
2	23
2	24
2	25
2	26
2	27
2	28
2	29
2	30
8	59
3	60
5	64
5	66
5	67
4	68
4	69
4	70
4	71
4	72
4	73
4	74
4	75
4	76
4	77
4	78
4	79
4	80
4	81
4	82
3	83
3	84
3	85
3	86
3	87
3	88
3	89
3	90
5	91
5	92
5	93
5	94
5	95
5	96
9	97
9	98
9	99
9	100
9	101
9	102
10	103
10	104
10	105
10	106
10	107
10	108
10	109
7	87
7	88
7	89
7	90
7	110
7	111
7	112
7	113
7	114
7	115
7	116
11	117
11	118
11	119
11	120
2	121
5	122
\.


--
-- TOC entry 4003 (class 0 OID 33055)
-- Dependencies: 233
-- Data for Name: compra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.compra (compraid, desconto, portes, total, criadaem, descricao, userid, moradaid, estadocompraid, transacaoid) FROM stdin;
37	0	1	38.75	2021-01-28 10:43:45.674	\N	1	1	1	53
35	0	1	24	2021-01-26 00:25:46.051	\N	1	1	2	51
36	0	1	110.17	2021-01-27 23:14:56.266	\N	1	1	3	52
38	0	1	18	2021-01-28 11:22:15.125	\N	1	1	4	54
39	0	1	7	2021-01-28 12:13:36.039	\N	1	2	4	55
40	0	1	6	2021-01-28 12:26:15.247	\N	1	1	4	56
41	0	1	15	2021-01-28 12:31:26.123	\N	1	1	4	57
42	0	1	6	2021-01-28 12:32:33.207	\N	1	1	4	58
43	0	1	15	2021-01-28 12:32:53.18	\N	1	2	4	59
44	0	1	9.99	2021-01-28 12:40:11.04	\N	1	1	4	60
45	0	1	2.75	2021-01-28 12:42:11.229	\N	1	2	4	61
46	0	1	15	2021-01-28 12:56:08.123	\N	1	2	4	62
47	0	1	6	2021-01-28 12:58:53.513	\N	1	2	4	63
48	0	1	15	2021-01-28 12:59:38.433	\N	1	2	4	64
49	0	1	2.75	2021-01-28 12:59:55.622	\N	1	2	4	65
50	0	1	12	2021-01-28 13:04:25.271	\N	1	2	1	66
30	0	1	48.75	2021-01-15 12:51:45.793	\N	1	2	1	46
31	0	1	25.990000000000002	2021-01-15 16:26:46.991	\N	1	1	1	47
32	0	1	21.740000000000002	2021-01-17 22:27:36.828	\N	1	1	4	48
33	0	1	25	2021-01-24 11:34:27.386	\N	1	2	1	49
34	0	1	30	2021-01-24 11:47:42.041	\N	1	2	1	50
51	0	1	12	2021-01-28 13:04:28.826	\N	1	2	3	67
52	0	1	12	2021-01-28 13:04:46.816	\N	1	2	3	68
53	0	1	2.75	2021-01-28 13:07:19.823	\N	1	2	3	69
54	0	1	15	2021-01-28 13:11:44.377	\N	1	1	2	70
55	0	1	72	2021-01-28 14:17:14.853	\N	1	1	1	71
56	0	1	554.99	2021-01-28 18:44:49.83	\N	1	2	1	72
57	0	1	30	2021-01-28 18:45:44.89	\N	1	2	1	73
58	0	1	54	2021-01-28 23:50:46.88	\N	1	1	1	74
59	0	1	15.99	2021-01-29 01:18:41.619	\N	43	2	1	75
60	0	1	68.97	2021-01-29 11:25:50.023	\N	44	1	1	76
61	0	1	554.98	2021-01-29 16:37:51.568	\N	1	2	1	77
62	0	1	318	2021-01-29 17:45:56.289	\N	1	2	1	78
63	0	1	74	2021-01-30 04:21:24.119	\N	1	1	1	79
64	0	1	48	2021-02-15 09:52:11.503	\N	1	1	1	80
65	0	1	299	2021-02-15 09:55:00.448	\N	1	2	1	81
\.


--
-- TOC entry 3999 (class 0 OID 33026)
-- Dependencies: 229
-- Data for Name: estadocompra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estadocompra (estadocompraid, nome) FROM stdin;
1	Pedido Recebido
2	Produto(s) embalados
3	Produto(s) enviados
4	Produto(s) entregues
\.


--
-- TOC entry 3995 (class 0 OID 33004)
-- Dependencies: 225
-- Data for Name: estadotransacao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estadotransacao (estadotransacaoid, nome) FROM stdin;
1	confirmada
\.


--
-- TOC entry 4007 (class 0 OID 33115)
-- Dependencies: 237
-- Data for Name: linhacarrinho; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.linhacarrinho (carrinhoid, produtoid, quantidade) FROM stdin;
\.


--
-- TOC entry 4004 (class 0 OID 33084)
-- Dependencies: 234
-- Data for Name: linhacompra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.linhacompra (compraid, produtoid, quantidade, preco) FROM stdin;
36	30	11	30.25
36	28	8	79.92
37	23	1	15
37	30	1	2.75
37	22	2	14
37	20	1	7
38	60	1	18
39	20	1	7
40	29	1	6
41	59	1	15
42	29	1	6
43	23	1	15
44	28	1	9.99
45	30	1	2.75
46	23	1	15
47	29	1	6
48	59	1	15
49	30	1	2.75
50	29	2	12
51	29	2	12
52	29	2	12
53	30	1	2.75
54	27	1	15
55	60	4	72
56	66	1	554.99
57	59	1	15
57	23	1	15
58	60	3	54
59	104	1	9.99
59	68	2	6
60	91	1	39
60	105	3	29.97
61	99	1	499
61	59	2	30
61	104	2	19.98
61	107	1	4
61	72	1	2
62	86	1	69
62	81	2	180
62	119	1	69
63	115	1	50
63	78	3	9
63	96	1	3
63	106	1	12
64	20	3	21
64	18	3	27
65	89	1	299
30	20	1	7
30	23	1	15
30	30	1	2.75
30	24	1	15
30	16	1	9
31	16	1	9
31	28	1	9.99
31	20	1	7
32	16	1	9
32	28	1	9.99
32	30	1	2.75
33	16	1	9
33	20	1	7
33	19	1	9
34	23	2	30
35	23	1	15
35	16	1	9
\.


--
-- TOC entry 3997 (class 0 OID 33015)
-- Dependencies: 227
-- Data for Name: metodopagamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metodopagamento (metodopagamentoid, nome) FROM stdin;
1	mbway
2	multibanco
3	cartão
\.


--
-- TOC entry 3985 (class 0 OID 32925)
-- Dependencies: 215
-- Data for Name: morada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.morada (moradaid, rua, cidade, codigo_postal, pais, descricao) FROM stdin;
1	Rua 25 Abril	Guimarães	4835-111	Portugal	Perto de quem vai
2	Rua Da descida	Pé na cova	3412-111	Portugal	Longe de tudo
\.


--
-- TOC entry 3986 (class 0 OID 32934)
-- Dependencies: 216
-- Data for Name: moradautilizador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.moradautilizador (moradaid, userid) FROM stdin;
1	1
2	1
\.


--
-- TOC entry 3990 (class 0 OID 32962)
-- Dependencies: 220
-- Data for Name: produto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produto (produtoid, nome, preco, desconto, stock, imagens, descricao) FROM stdin;
16	VÅGSJÖN-Branco	9	0	3	\N	Lençol de banho, branco100x150 cm
17	VÅGSJÖN-Azul	9	0	3	\N	Lençol de banho, azul escuro100x150 cm
18	VÅGSJÖN-Cinza	9	0	3	\N	Lençol de banho, cinza escuro100x150 cm
19	VÅGSJÖN-Roxo	9	0	3	\N	Lençol de banho, roxo100x150 cm
20	KORNAN-Rosa	7	0	3	\N	Lençol de banho, rosa100x150 cm
21	KORNAN-Azul Claro	7	0	3	\N	Lençol de banho, azul claro100x150 cm
22	KORNAN-Cinza	7	0	3	\N	Lençol de banho, cinz100x150 cm
23	HIMLEÅN-Amarelo	15	0	3	\N	Lençol de banho, amarelo100x150 cm
24	HIMLEÅN-Azul escuro	15	0	3	\N	Lençol de banho, azul100x150 cm
25	HIMLEÅN-Bege	15	0	3	\N	Lençol de banho, bege/mescla100x150 cm
26	HIMLEÅN-Cinzento	15	0	3	\N	Lençol de banho, cinza100x150 cm
27	HIMLEÅN-Vermelho	15	0	3	\N	Lençol de banho, vermelho100x150 cm
28	FOSKÅN	9.99	0	3	\N	Toalha de banho, branco/multicor70x140 cm
29	RÖRANDE	6	0	3	\N	Toalha de banho, branco/multicor70x140 cm
30	KLÄMMIG	2.75	0	3	\N	Toalha de rosto, verde/branco3 unidades
59	BYGGLEK	15	0	10	bygglek-lego-r-caixa-c-tampa-branco__0807574_PE770438_S5.webp||bygglek-lego-r-caixa-c-tampa-branco__0925685_PE788837_S5.webp||bygglek-lego-r-caixa-c-tampa-branco__0925688_PE788840_S5.webp||bygglek-lego-r-caixa-c-tampa-branco__0925690_PE788842_S5.webp||	LEGO® caixa c/tampa35x26x12 cm IVA incluído no preço
60	STENBÄR	18	0	30	stenbaer-vaso-cinz__0638855_PE699223_S5.webp||stenbaer-vaso-cinz__0768627_PE754505_S5.webp||stenbaer-vaso-cinz__0900264_PE626285_S5.webp||stenbaer-vaso-cinz__0901018_PE626286_S5.webp||	Vaso, cinz24 cm IVA incluído no preço
64	METOD	1227.48	0	20	metod-cozinha-branco-maximera-torhamn-freixo__0543500_PE654589_S5.webp||	Cozinha, branco Maximera/Torhamn freixo240x60x228 cm IVA incluído no preço
66	ENHET-cinza	554.99	0	10	enhet-cozinha-cinz-estrutura__0913406_PE783528_S5.webp||enhet-cozinha-cinz-estrutura__0913412_PE783551_S5.webp||enhet-cozinha-cinz-estrutura__0913416_PE783559_S5.webp||enhet-cozinha-cinz-estrutura__0957490_PE775444_S5.webp||	Cozinha, cinza estrutura243x63.5x222 cm
67	ENHET-carvalho	554.99	0	10	enhet-cozinha-efeito-carvalho__0913408_PE783526_S5.webp||enhet-cozinha-efeito-carvalho__0913414_PE783548_S5.webp||enhet-cozinha-efeito-carvalho__0940568_PE795061_S5.webp||enhet-cozinha-efeito-carvalho__0958408_PE775443_S5.webp||	Cozinha, efeito carvalho243x63.5x222 cm
68	INGEFÄRA	3	0	100	ingefaera-vaso-c-prato-exterior-terracota__0641000_PE700180_S5.webp||ingefaera-vaso-c-prato-exterior-terracota__0899044_PE594834_S5.webp||ingefaera-vaso-c-prato-exterior-terracota__0899051_PE615032_S5.webp||ingefaera-vaso-c-prato-exterior-terracota__0900694_PE610654_S5.webp||	Vaso c/prato, exterior/terracota, 12 cm
69	NYPON	1.50	0	100	nypon-vaso-interior-exterior-cinz__0641158_PE700331_S5.webp||nypon-vaso-interior-exterior-cinz__0768654_PE754532_S5.webp||nypon-vaso-interior-exterior-cinz__0901127_PE700328_S5.webp||nypon-vaso-interior-exterior-cinz__0901135_PE700330_S5.webp||	Vaso, interior/exterior cinza 9cm
70	SOMMARFEST	9.99	0	100	sommarfest-floreira-c-suporte-interior-exterior-antracite__0661595_PE711553_S5.webp||sommarfest-floreira-c-suporte-interior-exterior-antracite__0943672_PE796995_S5.webp||	Floreira c/suporte, interior/exterior antracite 50x20 cm
71	FÖRENLIG	1	0	100	foerenlig-vaso-interior-exterior-branco__0817558_PE774236_S5.webp||foerenlig-vaso-interior-exterior-branco__0817559_PE774237_S5.webp||foerenlig-vaso-interior-exterior-branco__0817560_PE774238_S5.webp||	Vaso, interior/exterior branco 9cm
72	BOYSENBÄR	2	0	100	boysenbaer-vaso-interior-exterior-cinz-clr__0958730_PE805442_S5.webp||boysenbaer-vaso-interior-exterior-cinz-clr__0958731_PE805444_S5.webp||boysenbaer-vaso-interior-exterior-cinz-clr__0958732_PE805443_S5.webp||	Vaso, interior/exterior cinza claro 6cm
73	SOCKER	1.50	0	100	socker-vaso-interior-exterior-galvanizado__0638852_PE699214_S5.webp||socker-vaso-interior-exterior-galvanizado__0899265_PE593903_S5.webp||socker-vaso-interior-exterior-galvanizado__0899270_PE594331_S5.webp||	interior/exterior/galvanizado 12cm
74	CHIAFRÖN	4	0	100	chiafroen-vaso-interior-exterior-azul-claro__0951768_PE804348_S5.webp||chiafroen-vaso-interior-exterior-azul-claro__0951769_pe804349_s5.webp||chiafroen-vaso-interior-exterior-azul-claro__0951770_pe804350_s5.webp||	Vaso, interior/exterior azul claro 12cm
75	FNITTRIG	19	0	100	fnittrig-vaso-interior-exterior-azul-cinz__0952307_PE804296_S5.webp||fnittrig-vaso-interior-exterior-azul-cinz__0952308_PE804297_S5.webp||fnittrig-vaso-interior-exterior-azul-cinz__0952309_pe804298_s5.webp||fnittrig-vaso-interior-exterior-azul-cinz__0970457_PE811080_S5.webp||	Vaso, interior/exterior azul/cinza 24cm
76	CHILIPEPPAR	26	0	100	chilipeppar-vaso-interior-exterior-bege__0951780_PE804360_S5.webp||chilipeppar-vaso-interior-exterior-bege__0951782_pe804362_s5.webp||chilipeppar-vaso-interior-exterior-bege__0970414_PE811064_S5.webp||	Vaso, interior/exterior bege 32cm
77	DYPSIS LUTESCENS	25	0	100	dypsis-lutescens-planta-areca__0443890_PE594605_S5.webp||dypsis-lutescens-planta-areca__0653973_PE708202_S5.webp||dypsis-lutescens-planta-areca__0902519_PE594539_S5.webp||	Planta, Areca 24 cm
78	HEDERA HELIX	3	0	100	hedera-helix-planta-hera__0654037_PE708262_S5.webp||hedera-helix-planta-hera__0768633_PE754511_S5.webp||hedera-helix-planta-hera__0899328_PE594588_S5.webp||	Planta, hera 13 cm
79	SUCCULENT	5	0	100	succulent-planta-em-vaso-mistura-de-especies__0573931_PE667976_S5.webp||succulent-planta-em-vaso-mistura-de-especies__0900031_PE668032_S5.webp||succulent-planta-em-vaso-mistura-de-especies__0900517_PE697508_S5.webp||	Planta em vaso, mistura de espécies 6cm 3 unidades
80	SEGLARÖ	200	0	30	seglaroe-svartoe-guarda-sol-suspenso-c-base-inclinavel-bege-cinz-esc__0590010_PE673626_S5.webp||seglaroe-svartoe-guarda-sol-suspenso-c-base-inclinavel-bege-cinz-esc__0709194_PE726860_S5.webp||seglaroe-svartoe-guarda-sol-suspenso-c-base-inclinavel-bege-cinz-esc__0906699_PE615753_S5.webp||seglaroe-svartoe-guarda-sol-suspenso-c-base-inclinavel-bege-cinz-esc__0906740_PE675438_S5.webp||	Guarda-sol suspenso c/base, inclinável bege/cinza, 330x240 cm
81	KUGGÖ 	90	0	100	kuggoe-lindoeja-guarda-sol-c-base-preto-grytoe-cinz-esc__0709186_PE726871_S5.webp||kuggoe-lindoeja-guarda-sol-c-base-preto-grytoe-cinz-esc__0907120_PE673383_S5.webp||kuggoe-lindoeja-guarda-sol-c-base-preto-grytoe-cinz-esc__0907124_PE673397_S5.webp||	Guarda-sol c/base, preto/cinza 300 cm
82	BRAMSÖN 	44.99	0	12	bramsoen-flisoe-guarda-sol-c-base-preto__0709188_PE726873_S5.webp||bramsoen-flisoe-guarda-sol-c-base-preto__0907010_PE618757_S5.webp||bramsoen-flisoe-guarda-sol-c-base-preto__0907018_PE618758_S5.webp||	Guarda-sol c/base, preto
83	LANGSTED	35	0	76	langsted-tapete-pelo-curto-cinz-clr__0777949_PE759303_S5.webp||langsted-tapete-pelo-curto-cinz-clr__0777950_PE759302_S5.webp||langsted-tapete-pelo-curto-cinz-clr__0777951_PE759301_S5.webp||	Tapete pelo curto, cinza 133x195 cm
84	STOENSE	139	0	23	stoense-tapete-pelo-curto-branco-bege__0624401_PE691815_S5.webp||stoense-tapete-pelo-curto-branco-bege__0624402_PE691814_S5.webp||stoense-tapete-pelo-curto-branco-bege__0893623_PE710401_S5.webp||stoense-tapete-pelo-curto-branco-bege__0916210_PH166416_S5.webp||	Tapete pelo curto, branco-bege 200x300 cm
85	TIPHEDE	9.99	0	75	tiphede-tapete-tecelagem-plana-cru-branco-bege__0772064_PE755877_S5.webp||tiphede-tapete-tecelagem-plana-cru-branco-bege__0772066_PE755879_S5.webp||tiphede-tapete-tecelagem-plana-cru-branco-bege__0772105_PE755880_S5.webp||	Tapete, tecelagem plana, branco-bege 120x180 cm
86	VONSBÄK	69	0	43	vonsbaek-tapete-pelo-curto-verde__0717870_PE731370_S5.webp||vonsbaek-tapete-pelo-curto-verde__0717878_PE731378_S5.webp||vonsbaek-tapete-pelo-curto-verde__0717879_PE731373_S5.webp||	Tapete pelo curto, verde 170x230 cm
87	MALM	226	0	32	malm-estr-cama-alta-c-2-cx-arrumacao-branco-luroey__0638626_PE699044_S5.webp||malm-estr-cama-alta-c-2-cx-arrumacao-branco-luroey__0800857_PH163673_S5.webp||malm-estr-cama-alta-c-2-cx-arrumacao-branco-luroey__0861256_PE662045_S5.webp||	Estr. cama alta c/2 caixas arrumação, branco/Luröy 140x200 cm
88	SLÄKT	229	0	32	slaekt-estr-cama-c-cama-gavet-arrumacao-branco__0637775_PE698535_S5.webp||slaekt-estr-cama-c-cama-gavet-arrumacao-branco__0876348_PE642444_S5.webp||slaekt-estr-cama-c-cama-gavet-arrumacao-branco__0876382_PE691863_S5.webp||	Cama c/cama-gaveta + arrumação, branco 90x200 cm
89	BOLLSTANÄS	299	0	21	bollstanaes-sofa-3-lugares-c-chaise-longue-skiftebo-cinz-esc__0818188_PE774339_S5.webp||bollstanaes-sofa-3-lugares-c-chaise-longue-skiftebo-cinz-esc__0818189_PE774340_S5.webp||bollstanaes-sofa-3-lugares-c-chaise-longue-skiftebo-cinz-esc__0818190_PE774343_S5.webp||	Sofá 3 lugares, c/chaise longue cinza escuro
90	ESKILSTUNA	699	0	23	eskilstuna-sofa-3-lugares-hillared-antracite__0794769_PE765711_S5.webp||eskilstuna-sofa-3-lugares-hillared-antracite__0794779_PE765720_S5.webp||eskilstuna-sofa-3-lugares-hillared-antracite__0794780_PE765717_S5.webp||	Sofá 3 lugares, Hillared antracite
91	VARDAGEN	39	0	21	vardagen-panela-c-tampa-ferro-fundido__0770385_PE755501_S5.webp||vardagen-panela-c-tampa-ferro-fundido__0790581_PE764336_S5.webp||vardagen-panela-c-tampa-ferro-fundido__0790582_PE764340_S5.webp||	Panela c/tampa, ferro fundido3 l
92	OUMBÄRLIG	12	0	32	oumbaerlig-panela-c-tampa__0712827_PE729090_S5.webp||oumbaerlig-panela-c-tampa__0893598_PE610908_S5.webp||oumbaerlig-panela-c-tampa__0893914_PE610372_S5.webp||	Panela c/tampa3 l
93	MIXTUR	4	0	65	mixtur-travessa-forno-vidro-transparente__0710569_PE727637_S5.webp||mixtur-travessa-forno-vidro-transparente__0895303_PE607658_S5.webp||mixtur-travessa-forno-vidro-transparente__0895304_PE609149_S5.webp||	Travessa forno, vidro transparente 35x25 cm
94	LYCKAD	9.99	0	34	lyckad-travessa-forno-cj2-cinz-esc__0916171_PE785011_S5.webp||lyckad-travessa-forno-cj2-cinz-esc__0916173_PE785012_S5.webp||lyckad-travessa-forno-cj2-cinz-esc__0916180_PE785015_S5.webp||	Travessa forno, cinza escuro
95	JÄMFÖRA	19.99	0	34	jaemfoera-suporte-c-3-facas-preto__0490344_PE624433_S5.webp||jaemfoera-suporte-c-3-facas-preto__0710423_PE727543_S5.webp||jaemfoera-suporte-c-3-facas-preto__0895819_PE624436_S5.webp||	Suporte c/3 facas, preto
96	FÖRDUBBLA	3	0	45	foerdubbla-conj-2-facas-cinz__0710422_PE727545_S5.webp||foerdubbla-conj-2-facas-cinz__0895514_PE712868_S5.webp||foerdubbla-conj-2-facas-cinz__0957285_PE805011_S5.webp||	Conj. 2 facas, cinza
97	ANRÄTTA	499	0	45	anraetta-forno-ar-forcado-c-fnc-pirolitica-aco-inoxidavel__0603261_PE680729_S5.webp||anraetta-forno-ar-forcado-c-fnc-pirolitica-aco-inoxidavel__0754875_PE748144_S5.webp||anraetta-forno-ar-forcado-c-fnc-pirolitica-aco-inoxidavel__0867673_PE680730_S5.webp||	Forno ar forçado, aço inoxidável A+
98	MATÄLSKARE	239	0	32	mataelskare-forno-de-ar-forcado-cor-de-aco__0754910_PE748167_S5.webp||mataelskare-forno-de-ar-forcado-cor-de-aco__0869527_PE670390_S5.webp||mataelskare-forno-de-ar-forcado-cor-de-aco__0869536_PE715247_S5.webp||	Forno de ar forçado, cor de aço
99	UTNÄMND	499	0	32	utnaemnd-placa-de-inducao-preto__0923265_PE788962_S5.webp||utnaemnd-placa-de-inducao-preto__0923266_PE788963_S5.webp||utnaemnd-placa-de-inducao-preto__0923267_PE788964_S5.webp||	Placa de indução, preto78 cm
100	TREVLIG	269	0	65	trevlig-placa-de-inducao-preto__0854651_PE780712_S5.webp||trevlig-placa-de-inducao-preto__0854652_PE780714_S5.webp||trevlig-placa-de-inducao-preto__0888356_PE782040_S5.webp||	Placa de indução, preto 59cm
101	TINAD	519	0	13	tinad-frigorifico-congelador-integr-a-branco__0755730_PE748583_S5.webp||tinad-frigorifico-congelador-integr-a-branco__0867592_PE664461_S5.webp||tinad-frigorifico-congelador-integr-a-branco__0867602_PE664464_S5.webp||	Frigorífico/congelador A++, branco 210/79 l
102	OMNEJD	799	0	21	omnejd-exaustor-de-teto-aco-inoxidavel__0755566_PE748465_S5.webp||omnejd-exaustor-de-teto-aco-inoxidavel__0868092_PE673357_S5.webp||omnejd-exaustor-de-teto-aco-inoxidavel__0868107_PE682467_S5.webp||	Exaustor de teto, aço inoxidável 90 cm A++
103	RYET	8	0	76	ryet-lampada-led-e27-1521-lumenes-globo-branco-opala__0710224_PE727415_S5.webp||	Lâmpada LED E27 1521 lúmenes, globo branco opala
104	LUNNOM	9.99	0	89	lunnom-lampada-led-e27-80-lumens-tubular-vidro-transp-castanho__0852533_PE780148_S5.webp||lunnom-lampada-led-e27-80-lumens-tubular-vidro-transp-castanho__0914648_PE784182_S5.webp||lunnom-lampada-led-e27-80-lumens-tubular-vidro-transp-castanho__0914649_PE784184_S5.webp||	Lâmpada LED E27 80 lúmens, tubular vidro transparente castanho
105	TRÅDFRI	9.99	0	65	tradfri-lampada-led-e27-250-lumenes-ilum-regulavel-s-fios-luz-quente-globo-vidro-transp-castanho__0722195_PE733517_S5.webp||tradfri-lampada-led-e27-250-lumenes-ilum-regulavel-s-fios-luz-quente-globo-vidro-transp-castanho__0773379_PE756292_S5.webp||	Lâmpada LED E27 250 lúmenes, ilumina;\\ao regulável luz quente/globo vidro transparente castanho
106	ROLLSBO	12	0	90	rollsbo-lampada-led-e27-200-lumens-intensidade-regulavel-globo-vidro-cinzento-transparente__0626597_PE692900_S5.webp||rollsbo-lampada-led-e27-200-lumens-intensidade-regulavel-globo-vidro-cinzento-transparente__0771759_PE755775_S5.webp||rollsbo-lampada-led-e27-200-lumens-intensidade-regulavel-globo-vidro-cinzento-transparente__0772341_PE755979_S5.webp||	Lâmpada LED E27 200 lúmens, intensidade regulável/globo vidro cinzento transparente 125mm
107	OMLOPP	4	0	43	omlopp-projetor-led-branco__0606483_PE682372_S5.webp||omlopp-projetor-led-branco__0881907_PE655222_S5.webp||	Projetor LED, branco 6.8cm
108	NORRFLY	15	0	76	norrfly-calha-de-iluminacao-led-cor-de-aluminio__0606470_PE682358_S5.webp||norrfly-calha-de-iluminacao-led-cor-de-aluminio__0881839_PE657838_S5.webp||norrfly-calha-de-iluminacao-led-cor-de-aluminio__0881857_PE619360_S5.webp||	Calha de iluminação LED, cor de alumínio 67cm
109	MITTLED	9.99	0	65	mittled-projetor-led-intensidade-regulavel-branco__0869946_pe781540_s5.webp||mittled-projetor-led-intensidade-regulavel-branco__0964014_PE808853_S5.webp||mittled-projetor-led-intensidade-regulavel-branco__0994567_ph149779_s5.webp||	Projetor LED, intensidade regulável branco
110	BILLY	29	0	98	billy-estante-branco__0644780_PE702956_S5.webp||billy-estante-branco__0850382_PE656847_S5.webp||	Estante, branco 80x28x106 cm
111	EKET	55	0	36	eket-combinacao-armario-c-pes-branco__0732079_PE738561_S5.webp||eket-combinacao-armario-c-pes-branco__0747109_PE744424_S5.webp||eket-combinacao-armario-c-pes-branco__0747110_PE744423_S5.webp||	Combinação armário c/pés, branco 70x35x72 cm
112	KALLAX	79	0	45	kallax-estante-branco__0601747_PE681619_S5.webp||kallax-estante-branco__0851499_PE682011_S5.webp||	Estante, branco 112x147 cm
113	HEMNES	199	0	45	hemnes-movel-tv-velatura-branca-castanho-claro__0583377_PE671187_S5.webp||hemnes-movel-tv-velatura-branca-castanho-claro__0803360_PE768855_S5.webp||hemnes-movel-tv-velatura-branca-castanho-claro__0850139_PE671188_S5.webp||	Móvel TV, velatura branca/castanho claro 148x47x57 cm
114	BESTÅ	179	0	43	besta-movel-tv-ef-carvalho-c-velatura-branca-selsviken-branco-brilh__0642955_PE701563_S5.webp||besta-movel-tv-ef-carvalho-c-velatura-branca-selsviken-branco-brilh__0723706_PE734137_S5.webp||besta-movel-tv-ef-carvalho-c-velatura-branca-selsviken-branco-brilh__0761029_PE751055_S5.webp||besta-movel-tv-ef-carvalho-c-velatura-branca-selsviken-branco-brilh__0843366_PE535714_S5.webp||	Móvel TV, efeito carvalho c/velatura branca branco/brilho 180x42x39 cm
115	IVAR	50	0	32	ivar-armario-pinho__21439_PE106384_S5.webp||ivar-armario-pinho__0730093_PH156209_S5.webp||ivar-armario-pinho__0911593_PE616324_S5.webp||	Armário, pinho80x30x83 cm
116	LIXHULT	120	0	23	lixhult-combinacao-de-arrumacao-antracite__0914421_PE784007_S5.webp||lixhult-combinacao-de-arrumacao-antracite__0914576_PE784139_S5.webp||lixhult-combinacao-de-arrumacao-antracite__0914577_PE784138_S5.webp||	Combinação de arrumação, antracite 140x35x82 cm
117	VÄRLDENS	29	0	65	vaerldens-mochila-cinz-esc__0815697_PE773015_S5.webp||vaerldens-mochila-cinz-esc__0854544_PH168733_S5.webp||vaerldens-mochila-cinz-esc__0854545_PH168729_S5.webp||	Mochila, cinza escuro 26 l
118	DRÖMSÄCK	29	0	33	droemsaeck-mochila-bege__0810046_PE771225_S5.webp||droemsaeck-mochila-bege__0820023_PE774889_S5.webp||droemsaeck-mochila-bege__0948887_PE799328_S5.webp||	Mochila, bege 21l
119	FÖRENKLA	69	0	66	foerenkla-saco-c-rodas__0711243_PE728088_S5.webp||foerenkla-saco-c-rodas__0911025_PE646726_S5.webp||foerenkla-saco-c-rodas__0911131_PE645876_S5.webp||	Saco c/rodas
120	STARTTID	19.99	0	43	starttid-mala-com-rodas__0711235_PE728080_S5.webp||starttid-mala-com-rodas__0811173_PE771586_S5.webp||starttid-mala-com-rodas__0911050_PE642689_S5.webp||	Mala com rodas
121	SALJEN	17	0	54	saljen-torneira-misturadora-p-lavatorio-preto__0914013_PE783826_S5.webp||saljen-torneira-misturadora-p-lavatorio-preto__0914014_PE783827_S5.webp||saljen-torneira-misturadora-p-lavatorio-preto__0914015_PE783829_S5.webp||	Torneira misturadora p/lavatório, preto
122	FÄRGRIK	2	0	53	faergrik-tigela-verde-claro__0541573_PH144040_S5.webp||faergrik-tigela-verde-claro__0712944_PE729123_S5.webp||faergrik-tigela-verde-claro__0898352_PE617721_S5.webp||	Tigela, verde claro 16 cm
\.


--
-- TOC entry 3993 (class 0 OID 32988)
-- Dependencies: 223
-- Data for Name: review; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.review (reviewid, titulo, descricao, rating, _data, produtoid) FROM stdin;
2	Bom produto	Qualidade boa	4	2021-01-07 00:00:00	16
3	Mau produto	Qualidade ma	2	2021-01-07 00:00:00	16
4	Mau produto	Qualidade ma	2	2021-01-07 00:00:00	17
5	Osvaldo	descrição teste	4	2021-01-16 16:04:36.172	18
6	Osvaldo	Produto incrível 	3	2021-01-16 16:16:39.921	17
7	Osvaldo	Top	4	2021-01-16 16:22:21.068	17
8	Osvaldo	Incriveeeel	4	2021-01-16 16:24:14.424	18
9	Osvaldo	eqwe	4	2021-01-16 16:25:05.558	18
10	Osvaldo	ewqe	2	2021-01-16 16:25:21.978	18
11	Osvaldo	Mx	5	2021-01-16 16:25:52.72	18
12	Osvaldo	asdasd	3	2021-01-16 16:29:04.999	17
13	Osvaldo	Grande produto	3	2021-01-16 16:29:59.253	19
14	Osvaldo	teste	3.5	2021-01-16 16:31:05.083	17
15	Osvaldo	Incrivel	4	2021-01-17 22:29:03.615	30
16	Osvaldo	nhe	2	2021-01-17 22:29:37.589	30
17	Osvaldo	Ta nice irmao	3.5	2021-01-26 00:28:47.987	16
18	Osvaldo	Qualidade fantástica para o valor!	2.5	2021-01-27 16:30:41.15	16
19	Osvaldo	Fantástico, melhor impossível 	0.5	2021-01-28 11:28:09.886	30
20	Osvaldo	ta nice!	3	2021-01-28 11:39:27.608	60
21	Osvaldo	Legal 	3.5	2021-01-28 13:01:46.709	59
22	Osvaldo	Top Xuxa mega life	4	2021-01-28 13:02:29.241	59
23	Osvaldo	Fantastico	0.5	2021-01-28 23:51:34.977	30
24	Osvaldo	Tecido muito bom.	4	2021-01-29 11:27:10.262	29
25	Osvaldo	Relacao quantidade preco muito boa	3.5	2021-01-29 16:28:52.744	30
26	Osvaldo	Muito bom	1	2021-01-29 17:40:57.151	30
27	Osvaldo	Bom produto	4.5	2021-02-15 09:53:01.186	30
28	Osvaldo	Fantástico	2.5	2021-02-15 09:55:22.256	30
\.


--
-- TOC entry 4001 (class 0 OID 33037)
-- Dependencies: 231
-- Data for Name: transacao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transacao (transacaoid, criadoem, metodopagamentoid, estadotransacaoid) FROM stdin;
1	2021-01-11 19:34:33.171	1	1
2	2021-01-11 19:34:49.43	1	1
3	2021-01-11 19:40:27.344	1	1
4	2021-01-11 19:41:41.388	1	1
5	2021-01-11 19:41:50.813	1	1
6	2021-01-11 19:41:58.884	1	1
7	2021-01-11 19:50:23.463	1	1
8	2021-01-11 19:50:41.449	1	1
9	2021-01-11 19:57:24.257	1	1
10	2021-01-11 19:57:58.131	1	1
11	2021-01-12 14:45:22.171	1	1
12	2021-01-12 14:58:33.067	1	1
13	2021-01-12 14:59:01.128	1	1
14	2021-01-12 15:01:30.835	1	1
15	2021-01-12 15:03:05.258	1	1
16	2021-01-12 15:04:15.253	1	1
17	2021-01-12 15:04:30.177	1	1
18	2021-01-12 15:04:30.721	1	1
19	2021-01-12 15:05:24.384	1	1
20	2021-01-12 15:25:18.974	1	1
21	2021-01-12 15:25:46.346	1	1
22	2021-01-12 15:37:57.754	1	1
23	2021-01-12 15:38:08.571	1	1
24	2021-01-12 15:40:16.481	1	1
25	2021-01-12 15:40:40.381	1	1
26	2021-01-12 15:40:56.887	1	1
27	2021-01-12 15:41:08.891	1	1
28	2021-01-12 15:42:15.698	1	1
29	2021-01-12 15:42:48.705	1	1
30	2021-01-12 15:43:06.838	1	1
31	2021-01-12 15:44:09.493	1	1
32	2021-01-12 16:41:17.75	1	1
33	2021-01-12 18:25:38.151	2	1
34	2021-01-12 18:26:18.813	2	1
35	2021-01-12 18:26:19.948	2	1
36	2021-01-12 18:26:23.695	2	1
37	2021-01-12 18:26:39.116	2	1
38	2021-01-12 18:26:40.345	2	1
39	2021-01-12 18:29:12.275	1	1
40	2021-01-12 18:34:59.292	2	1
41	2021-01-12 18:46:07.52	1	1
42	2021-01-12 18:46:35.453	1	1
43	2021-01-12 18:47:32.639	1	1
44	2021-01-12 18:48:28.978	2	1
45	2021-01-12 18:49:14.478	2	1
46	2021-01-15 12:51:45.417	1	1
47	2021-01-15 16:26:46.595	2	1
48	2021-01-17 22:27:36.787	1	1
49	2021-01-24 11:34:27.309	2	1
50	2021-01-24 11:47:41.989	2	1
51	2021-01-26 00:25:45.934	2	1
52	2021-01-27 23:14:56.221	3	1
53	2021-01-28 10:43:45.377	2	1
54	2021-01-28 11:22:14.822	1	1
55	2021-01-28 12:13:35.73	3	1
56	2021-01-28 12:26:15.213	3	1
57	2021-01-28 12:31:25.826	3	1
58	2021-01-28 12:32:32.881	3	1
59	2021-01-28 12:32:53.145	2	1
60	2021-01-28 12:40:11.002	3	1
61	2021-01-28 12:42:11.195	2	1
62	2021-01-28 12:56:08.088	2	1
63	2021-01-28 12:58:53.479	2	1
64	2021-01-28 12:59:38.399	2	1
65	2021-01-28 12:59:55.583	2	1
66	2021-01-28 13:04:24.979	1	1
67	2021-01-28 13:04:28.793	1	1
68	2021-01-28 13:04:46.408	1	1
69	2021-01-28 13:07:19.79	1	1
70	2021-01-28 13:11:44.338	3	1
71	2021-01-28 14:17:14.806	3	1
72	2021-01-28 18:44:49.773	2	1
73	2021-01-28 18:45:44.843	2	1
74	2021-01-28 23:50:46.551	2	1
75	2021-01-29 01:18:41.314	2	1
76	2021-01-29 11:25:49.678	2	1
77	2021-01-29 16:37:51.219	1	1
78	2021-01-29 17:45:55.915	1	1
79	2021-01-30 04:21:23.819	2	1
80	2021-02-15 09:52:11.262	1	1
81	2021-02-15 09:55:00.409	3	1
\.


--
-- TOC entry 3983 (class 0 OID 32914)
-- Dependencies: 213
-- Data for Name: utilizador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.utilizador (userid, nome, contacto, email, pass, isadmin) FROM stdin;
1	Osvaldo	9111111	os@gmail.com	111	f
2	Jose	12345	as@as.pt	1234	f
6	Georgina	6969696969	geodoronaldo@cr7.pt	siiiiiii	f
7	admin	11111	11@gmail.com	111	t
32	aaa	123456	abc@gmail.com	12345678	f
43	Antonio Tavares	937263847	tavares@gmail.com	12345678	f
44	Antonio Joaquim	8472948345	antonio@hotmail.com	12345678	f
\.


--
-- TOC entry 4025 (class 0 OID 0)
-- Dependencies: 202
-- Name: carrinho_carrinho_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrinho_carrinho_id_seq', 1, false);


--
-- TOC entry 4026 (class 0 OID 0)
-- Dependencies: 235
-- Name: carrinho_carrinhoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrinho_carrinhoid_seq', 6, true);


--
-- TOC entry 4027 (class 0 OID 0)
-- Dependencies: 203
-- Name: categoria_categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_categoria_id_seq', 2, true);


--
-- TOC entry 4028 (class 0 OID 0)
-- Dependencies: 217
-- Name: categoria_categoriaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_categoriaid_seq', 13, true);


--
-- TOC entry 4029 (class 0 OID 0)
-- Dependencies: 204
-- Name: compra_compra_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.compra_compra_id_seq', 1, false);


--
-- TOC entry 4030 (class 0 OID 0)
-- Dependencies: 232
-- Name: compra_compraid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.compra_compraid_seq', 65, true);


--
-- TOC entry 4031 (class 0 OID 0)
-- Dependencies: 228
-- Name: estadocompra_estadocompraid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estadocompra_estadocompraid_seq', 4, true);


--
-- TOC entry 4032 (class 0 OID 0)
-- Dependencies: 224
-- Name: estadotransacao_estadotransacaoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estadotransacao_estadotransacaoid_seq', 1, true);


--
-- TOC entry 4033 (class 0 OID 0)
-- Dependencies: 205
-- Name: linhacarrinho_linhacarrinho_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.linhacarrinho_linhacarrinho_id_seq', 1, false);


--
-- TOC entry 4034 (class 0 OID 0)
-- Dependencies: 206
-- Name: linhacompra_linhacompra_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.linhacompra_linhacompra_id_seq', 1, false);


--
-- TOC entry 4035 (class 0 OID 0)
-- Dependencies: 226
-- Name: metodopagamento_metodopagamentoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.metodopagamento_metodopagamentoid_seq', 3, true);


--
-- TOC entry 4036 (class 0 OID 0)
-- Dependencies: 207
-- Name: morada_morada_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.morada_morada_id_seq', 1, false);


--
-- TOC entry 4037 (class 0 OID 0)
-- Dependencies: 214
-- Name: morada_moradaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.morada_moradaid_seq', 2, true);


--
-- TOC entry 4038 (class 0 OID 0)
-- Dependencies: 208
-- Name: produto_produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produto_produto_id_seq', 1, false);


--
-- TOC entry 4039 (class 0 OID 0)
-- Dependencies: 219
-- Name: produto_produtoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produto_produtoid_seq', 122, true);


--
-- TOC entry 4040 (class 0 OID 0)
-- Dependencies: 209
-- Name: review_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.review_review_id_seq', 1, false);


--
-- TOC entry 4041 (class 0 OID 0)
-- Dependencies: 222
-- Name: review_reviewid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.review_reviewid_seq', 28, true);


--
-- TOC entry 4042 (class 0 OID 0)
-- Dependencies: 230
-- Name: transacao_transacaoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transacao_transacaoid_seq', 81, true);


--
-- TOC entry 4043 (class 0 OID 0)
-- Dependencies: 210
-- Name: transaction_transaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transaction_transaction_id_seq', 1, false);


--
-- TOC entry 4044 (class 0 OID 0)
-- Dependencies: 211
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_user_id_seq', 1, false);


--
-- TOC entry 4045 (class 0 OID 0)
-- Dependencies: 212
-- Name: utilizador_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utilizador_userid_seq', 44, true);


-- Completed on 2021-02-15 14:52:09

--
-- PostgreSQL database dump complete
--

