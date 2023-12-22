# Supabase CLI Commands
| Command                                             | Action                                          |
| --------------------------------------------------- | ----------------------------------------------- |
| `supabase init`                                     | Create config file                              |
| `supabase start`                                    | Start container for local                       |
| `supabase stop`                                     | Stop container                                  |
| `supabase db reset`                                 | Restart container                               |
| `supabase db pull`                                  | Pull down table structure to local              |
| `supabase link`                                     | Link a new project to local                     |
| `supabase status`                                   | Get API URLs                                    |
| `supabase migration list`                           | Action                                          |
| `supabase migration squash --linked`                | Combine all migration scripts into one SQL file |
| `supabase db dump -f supabase/seed.sql --data-only` | Pull down table data to local                   |
| `supabase inspect db table-sizes`                   | Get sizes of each table                         |