--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-1.pgdg20.04+1)

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
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: Key; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: LogTable; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."LogTable" ("LogTableId", "DateCreated", "DateUpdated", "WorkoutCount") VALUES
	(1, '2023-12-23 15:24:01.479379+00', '2023-12-23 15:24:01.479379+00', 2);


--
-- Data for Name: MuscleGroup; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."MuscleGroup" ("MuscleGroupId", "DateCreated", "DateUpdated", "Name") VALUES
	(1, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Abs'),
	(2, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Back'),
	(3, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Biceps'),
	(4, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Chest'),
	(5, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Forearms'),
	(6, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Legs'),
	(7, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Shoulders'),
	(8, '2023-12-14 00:53:31.049157+00', '2023-12-14 00:53:31.049157+00', 'Triceps');


--
-- Data for Name: Session; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: WorkoutNames; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."WorkoutNames" ("WorkoutNameId", "DateCreated", "DateUpdated", "Name") VALUES
	(3, '2023-12-24 16:33:12.791122+00', '2023-12-24 16:33:12.791122+00', 'Back Extension'),
	(4, '2023-12-24 16:33:19.441157+00', '2023-12-24 16:33:19.441157+00', 'Leg Press'),
	(5, '2023-12-24 21:27:30.79228+00', '2023-12-24 21:27:30.79228+00', 'Ab Curl'),
	(6, '2023-12-26 03:47:24.835911+00', '2023-12-26 03:47:24.835911+00', 'New Workout');


--
-- Data for Name: Workout; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."Workout" ("WorkoutId", "DateCreated", "DateUpdated", "MaxWeight", "WorkoutDate", "MuscleGroupId", "WorkoutNameId") VALUES
	(1, '2023-12-14 00:55:01.645835+00', '2023-12-24 16:36:49.802006+00', 85, '2023-12-14 00:55:01.645835+00', 2, 3),
	(3, '2023-12-14 00:56:24.219352+00', '2023-12-24 16:36:54.711728+00', 145, '2023-12-14 00:56:13+00', 6, 4),
	(4, '2023-12-24 21:27:30.941938+00', '2023-12-24 21:27:30.941938+00', 50, '2023-12-24 00:00:00+00', 1, 5),
	(5, '2023-12-26 03:46:51.389815+00', '2023-12-26 03:46:51.389815+00', 20, '2023-12-26 03:46:00+00', 6, 4),
	(6, '2023-12-26 03:47:25.071354+00', '2023-12-26 03:47:25.071354+00', 100, '2023-12-26 03:47:00+00', 8, 6);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: Key_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."Key_id_seq"', 1, false);


--
-- Name: LogTable_LogTableId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."LogTable_LogTableId_seq"', 1, true);


--
-- Name: MuscleGroup_MuscleGroupId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."MuscleGroup_MuscleGroupId_seq"', 8, true);


--
-- Name: WorkoutNames_WorkoutNameId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."WorkoutNames_WorkoutNameId_seq"', 6, true);


--
-- Name: Workout_WorkoutId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."Workout_WorkoutId_seq"', 6, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
