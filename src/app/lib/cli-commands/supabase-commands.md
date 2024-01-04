## Supabase CLI Configuration Commands

| Command                                                       | Action                                          |
| ------------------------------------------------------------- | ----------------------------------------------- |
| `supabase link`                                               | Link a new project to local                     |
| `supabase init`                                               | Create config file                              |
| `supabase db pull`                                            | Pull down table structure to local              |
| `supabase db dump -f supabase/seed.sql --data-only`           | Pull down table data to local                   |
| `npx supabase gen types typescript --project-id [PROJECT_ID]` | Generate database types                         |
| `supabase migration list`                                     | Action                                          |
| `supabase migration squash --linked`                          | Combine all migration scripts into one SQL file |
| `supabase inspect db table-sizes`                             | Get sizes of each table                         |

## Supabase CLI General Commands

| Command                                       | Action                                              |
| --------------------------------------------- | --------------------------------------------------- |
| `supabase start`                              | Start container for local                           |
| `source ./supabase/.env && supabase start`    | Start container (if env variables aren't loading - Mac)   |
| `supabase stop`                               | Stop container                                      |
| `supabase db reset`                           | Restart container                                   |
| `source ./supabase/.env && supabase db reset` | Resrart container (if env variables aren't loading - Mac) |
| `supabase status`                             | Get API URLs                                        |
