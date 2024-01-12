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

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'a3e68009-14cd-432a-bf96-f713430578b1', '{"action":"user_invited","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"supabase_admin","actor_via_sso":false,"log_type":"team","traits":{"user_email":"tylerlatshaw@gmail.com","user_id":"174a3d98-bf15-4019-9ebb-2b1834c9aa06"}}', '2024-01-05 02:21:21.893833+00', ''),
	('00000000-0000-0000-0000-000000000000', '5adc2ec4-d88d-4f34-b751-8b80a49b6fc2', '{"action":"user_signedup","actor_id":"174a3d98-bf15-4019-9ebb-2b1834c9aa06","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"team"}', '2024-01-05 02:21:54.155338+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ee8268a-1270-4ab4-b7b6-b54ae020c1b2', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"tylerlatshaw@gmail.com","user_id":"174a3d98-bf15-4019-9ebb-2b1834c9aa06","user_phone":""}}', '2024-01-07 03:25:50.13555+00', ''),
	('00000000-0000-0000-0000-000000000000', '1279abda-0473-4bd8-9b31-113b1d9b23c0', '{"action":"user_confirmation_requested","actor_id":"f083be0e-a14c-409e-b9cd-7cabd2026353","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-01-07 03:45:40.1521+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b114d8b2-9d02-450a-901e-9f815be804c2', '{"action":"user_signedup","actor_id":"f083be0e-a14c-409e-b9cd-7cabd2026353","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"team"}', '2024-01-07 03:45:54.171099+00', ''),
	('00000000-0000-0000-0000-000000000000', '89e4c18f-b932-4486-ad70-28890020c37a', '{"action":"login","actor_id":"f083be0e-a14c-409e-b9cd-7cabd2026353","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"email"}}', '2024-01-07 03:45:54.394891+00', ''),
	('00000000-0000-0000-0000-000000000000', '1cc33afa-9338-4604-852a-8ee149ea74b9', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"the.programming.bowler@gmail.com","user_id":"7be682df-a7d6-48e3-bc26-be3f009ba772","user_phone":""}}', '2024-01-09 00:50:35.844606+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9e6e04b-0133-4f16-9bda-7c8b25b5628f', '{"action":"login","actor_id":"7be682df-a7d6-48e3-bc26-be3f009ba772","actor_username":"the.programming.bowler@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-09 00:50:57.812741+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e1b6f7f8-3726-44e2-890f-7088f75cffeb', '{"action":"logout","actor_id":"7be682df-a7d6-48e3-bc26-be3f009ba772","actor_username":"the.programming.bowler@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-01-09 01:21:28.961602+00', ''),
	('00000000-0000-0000-0000-000000000000', '7157b606-cb81-471e-ac42-f40b0d3e2a1e', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"tylerlatshaw@gmail.com","user_id":"f083be0e-a14c-409e-b9cd-7cabd2026353","user_phone":""}}', '2024-01-09 03:09:06.524078+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd6413bea-d9bb-45f0-a678-c710380f5edc', '{"action":"user_confirmation_requested","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-01-09 03:09:30.71258+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c506c41-b159-46d9-a574-c93da9a03f79', '{"action":"user_signedup","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"team"}', '2024-01-09 03:09:53.707798+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f168490-69dd-4f37-9e0c-7e5c23b8e17b', '{"action":"login","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"email"}}', '2024-01-09 03:09:54.040967+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a866348e-ae03-4f8c-9d13-1078ec48a47f', '{"action":"login","actor_id":"7be682df-a7d6-48e3-bc26-be3f009ba772","actor_username":"the.programming.bowler@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-09 03:40:02.037944+00', ''),
	('00000000-0000-0000-0000-000000000000', '383751fc-bc6b-40d5-a95a-5832153d5635', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 04:09:54.24146+00', ''),
	('00000000-0000-0000-0000-000000000000', '790ccfd7-4cbf-4526-be16-86d5c95cae5c', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 04:09:54.242825+00', ''),
	('00000000-0000-0000-0000-000000000000', '30ec0878-662b-4e2e-8d70-ea3693b60767', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 05:21:24.984063+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd5783df9-40d8-47bb-b617-77853540a94f', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 05:21:24.985331+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eadf5f4d-01cd-4738-a33a-996678e76242', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 06:43:09.020654+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b43d12c3-ff11-486d-a394-ba4954ed9ad9', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 06:43:09.022308+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bdbb980b-4f2e-4992-8222-86c481f7fca0', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 08:11:43.556264+00', ''),
	('00000000-0000-0000-0000-000000000000', '7d1f1d14-1370-4bb8-9586-cd24725253f5', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 08:11:43.560331+00', ''),
	('00000000-0000-0000-0000-000000000000', '2b16c544-a7e1-4032-b91c-f57412405e6a', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 09:11:48.379725+00', ''),
	('00000000-0000-0000-0000-000000000000', '768525bf-fa01-4b00-aa04-481d77fbbdcb', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 09:11:48.381842+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a3ce4cc-e446-45d1-8e5d-bf0d05981039', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 10:12:36.241945+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b5273e7-6a76-43b6-ae54-821fe0fdc1bf', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 10:12:36.243773+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dd5d8db4-0aa9-48cf-8f57-93f45cfb9e5b', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 11:13:24.557703+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa51860e-7070-41f6-a4a7-f1edf63ab59a', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 11:13:24.559673+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ac6cfa9-fa7e-44a5-a95c-d7ffd3dc1a12', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 12:37:47.844816+00', ''),
	('00000000-0000-0000-0000-000000000000', '82f367f6-e7dd-4fcf-9040-4e790377737c', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 12:37:47.847807+00', ''),
	('00000000-0000-0000-0000-000000000000', '3ff3e093-7f3a-40f4-9826-a276c5e691f8', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 13:38:21.38207+00', ''),
	('00000000-0000-0000-0000-000000000000', '10a3a172-2065-4994-97a0-80ed2ca45438', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 13:38:21.384252+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c153382-cba2-424d-a6a1-a7f92242e125', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 14:39:09.44561+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e219f876-476b-4671-928f-3c52fd1a36d3', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 14:39:09.446275+00', ''),
	('00000000-0000-0000-0000-000000000000', '3ca92c7c-55dd-48a9-919f-b692e2ad8640', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 15:48:49.209491+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c441525-dd58-42d5-a9d5-ccfc14ab5a23', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 15:48:49.211071+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ba5f8e3-83c9-491d-8718-f9491f354314', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 16:50:56.738966+00', ''),
	('00000000-0000-0000-0000-000000000000', '2e291112-7150-4c30-bdea-97c1c8ec5105', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 16:50:56.740296+00', ''),
	('00000000-0000-0000-0000-000000000000', '844f33e4-9e9a-4996-afc4-6165784af19d', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 18:38:52.930695+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd71ea7b7-b83d-4aa3-b1e8-f889d5fac259', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 18:38:52.9319+00', ''),
	('00000000-0000-0000-0000-000000000000', '7daf7c98-dcb2-4740-a64a-6b9745616ea4', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 19:43:46.624729+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ebc1464-3a73-4b2c-925f-68df421d0de1', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 19:43:46.626294+00', ''),
	('00000000-0000-0000-0000-000000000000', '8049e5b4-636d-497b-b88e-4d21a3b2c5c3', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 20:43:46.173962+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd86625d-6169-4e28-a681-7d0d8ffa1c94', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 20:43:46.175308+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f970257-30b9-40ce-86c1-1f73937c43c0', '{"action":"token_refreshed","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 21:43:46.195371+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ca9f2306-e850-49a6-a912-03faf18c3242', '{"action":"token_revoked","actor_id":"3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7","actor_username":"tylerlatshaw@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-01-09 21:43:46.197841+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '7be682df-a7d6-48e3-bc26-be3f009ba772', 'authenticated', 'authenticated', 'the.programming.bowler@gmail.com', '$2a$10$lUmW4tZrFyv6F9FNZMMVbuih8ljvzSgirMfz/NSEKx9/7cldSPc1q', '2024-01-09 00:50:35.847107+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-09 03:40:02.04+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-01-09 00:50:35.83616+00', '2024-01-09 03:40:02.042404+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', 'authenticated', 'authenticated', 'tylerlatshaw@gmail.com', '$2a$10$y.xl28YLFQ8G1mXPc4myZeD4iuVsX96mk25shkYevOJRJZ6JrxGK.', '2024-01-09 03:09:53.708491+00', NULL, '', '2024-01-09 03:09:30.71574+00', '', NULL, '', '', NULL, '2024-01-09 03:09:54.041595+00', '{"provider": "email", "providers": ["email"]}', '{"last_name": "Latshaw", "first_name": "Tyler", "display_name": "Tyler Latshaw"}', NULL, '2024-01-09 03:09:30.708824+00', '2024-01-09 21:43:46.200565+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('7be682df-a7d6-48e3-bc26-be3f009ba772', '7be682df-a7d6-48e3-bc26-be3f009ba772', '{"sub": "7be682df-a7d6-48e3-bc26-be3f009ba772", "email": "the.programming.bowler@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-09 00:50:35.842541+00', '2024-01-09 00:50:35.842599+00', '2024-01-09 00:50:35.842599+00', 'd959442c-4dd8-4337-930e-4f8b574818b6'),
	('3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', '{"sub": "3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7", "email": "tylerlatshaw@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-09 03:09:30.711025+00', '2024-01-09 03:09:30.711071+00', '2024-01-09 03:09:30.711071+00', 'fd8a39cc-b95d-45ae-aea4-e01e5745ec07');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('ea61453c-c56c-405c-a90d-0519c0193a9d', '7be682df-a7d6-48e3-bc26-be3f009ba772', '2024-01-09 03:40:02.04011+00', '2024-01-09 03:40:02.04011+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.6099.119 Mobile/15E148 Safari/604.1', '166.196.103.68', NULL),
	('86bd1d8d-d7a4-482f-a931-dcfaf7edeba0', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', '2024-01-09 03:09:54.041675+00', '2024-01-09 21:43:46.201571+00', NULL, 'aal1', NULL, '2024-01-09 21:43:46.201497', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '174.178.137.233', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('86bd1d8d-d7a4-482f-a931-dcfaf7edeba0', '2024-01-09 03:09:54.044007+00', '2024-01-09 03:09:54.044007+00', 'email/signup', '7fed8620-c4e8-4b46-8b7b-6e980be31137'),
	('ea61453c-c56c-405c-a90d-0519c0193a9d', '2024-01-09 03:40:02.042925+00', '2024-01-09 03:40:02.042925+00', 'password', '4e775e8c-1011-413e-8a5c-699cb67aa96c');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 5, 'gWVj9kFCbRIL_kNGW8fFtA', '7be682df-a7d6-48e3-bc26-be3f009ba772', false, '2024-01-09 03:40:02.041045+00', '2024-01-09 03:40:02.041045+00', NULL, 'ea61453c-c56c-405c-a90d-0519c0193a9d'),
	('00000000-0000-0000-0000-000000000000', 4, 'p6bDLmPOUEqTStypudBhZg', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 03:09:54.042544+00', '2024-01-09 04:09:54.243473+00', NULL, '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 6, 'qqgWxH_IDUCw7HDSVGyD7Q', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 04:09:54.248597+00', '2024-01-09 05:21:24.985884+00', 'p6bDLmPOUEqTStypudBhZg', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 7, '2Bl6tSc6ZJKAy2y3tI_L4A', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 05:21:24.988331+00', '2024-01-09 06:43:09.02302+00', 'qqgWxH_IDUCw7HDSVGyD7Q', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 8, 'XPNJJHVyDY0UG4L8oa_aQg', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 06:43:09.02408+00', '2024-01-09 08:11:43.560923+00', '2Bl6tSc6ZJKAy2y3tI_L4A', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 9, 'LnuonTljCwo0iaEujCxhYw', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 08:11:43.561305+00', '2024-01-09 09:11:48.382525+00', 'XPNJJHVyDY0UG4L8oa_aQg', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 10, 'htn0dGBHc9jgdV5qIqTnSw', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 09:11:48.383666+00', '2024-01-09 10:12:36.24431+00', 'LnuonTljCwo0iaEujCxhYw', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 11, 'wRLj7M4R2O9HvWitG4AFGg', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 10:12:36.244678+00', '2024-01-09 11:13:24.560327+00', 'htn0dGBHc9jgdV5qIqTnSw', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 12, 'nMHuDLTadp-qwNwWE4XZJw', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 11:13:24.560664+00', '2024-01-09 12:37:47.848519+00', 'wRLj7M4R2O9HvWitG4AFGg', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 13, 'Ta5V5RsnQCDzeRvy_lLMYA', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 12:37:47.850285+00', '2024-01-09 13:38:21.386656+00', 'nMHuDLTadp-qwNwWE4XZJw', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 14, 'TbRZUggyrVfn4fC0ZkWZZw', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 13:38:21.387739+00', '2024-01-09 14:39:09.446806+00', 'Ta5V5RsnQCDzeRvy_lLMYA', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 15, 'xxTYP4YFNSBQIkx-7tArKA', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 14:39:09.447886+00', '2024-01-09 15:48:49.21171+00', 'TbRZUggyrVfn4fC0ZkWZZw', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 16, 'iTStgR44lsLXvkTv23JDJA', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 15:48:49.212715+00', '2024-01-09 16:50:56.740789+00', 'xxTYP4YFNSBQIkx-7tArKA', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 17, '5CD7QJFb-fBhQtgNOdPdKQ', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 16:50:56.741942+00', '2024-01-09 18:38:52.932453+00', 'iTStgR44lsLXvkTv23JDJA', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 18, 'L4J6HCAoWJ2L66eBAtCQ1w', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 18:38:52.933318+00', '2024-01-09 19:43:46.626914+00', '5CD7QJFb-fBhQtgNOdPdKQ', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 19, 'egbL4jiRzay7jhSbQWm3Yg', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 19:43:46.62732+00', '2024-01-09 20:43:46.175843+00', 'L4J6HCAoWJ2L66eBAtCQ1w', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 20, 'O3jzEAfaYvKIAd0fynC3xg', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', true, '2024-01-09 20:43:46.177835+00', '2024-01-09 21:43:46.19842+00', 'egbL4jiRzay7jhSbQWm3Yg', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0'),
	('00000000-0000-0000-0000-000000000000', 21, 'FtMIJw5-sjfaRXpmQG9cmA', '3fb41cc1-f1bc-4d51-b7aa-02ddc50b94b7', false, '2024-01-09 21:43:46.198731+00', '2024-01-09 21:43:46.198731+00', 'O3jzEAfaYvKIAd0fynC3xg', '86bd1d8d-d7a4-482f-a931-dcfaf7edeba0');


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
-- Data for Name: WorkoutNames; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."WorkoutNames" ("WorkoutNameId", "DateCreated", "DateUpdated", "Name") VALUES
	(3, '2023-12-24 16:33:12.791122+00', '2023-12-24 16:33:12.791122+00', 'Back Extension'),
	(4, '2023-12-24 16:33:19.441157+00', '2023-12-24 16:33:19.441157+00', 'Leg Press'),
	(5, '2023-12-24 21:27:30.79228+00', '2023-12-24 21:27:30.79228+00', 'Ab Curl'),
	(6, '2023-12-26 03:47:24.835911+00', '2023-12-26 03:47:24.835911+00', 'New Workout'),
	(7, '2024-01-09 03:11:09.417838+00', '2024-01-09 03:11:09.417838+00', 'Goblet Squats');


--
-- Data for Name: Workout; Type: TABLE DATA; Schema: public; Owner: postgres
--



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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 21, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


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

SELECT pg_catalog.setval('"public"."WorkoutNames_WorkoutNameId_seq"', 7, true);


--
-- Name: Workout_WorkoutId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."Workout_WorkoutId_seq"', 9, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
