## Supabase CLI Configuration Commands

| Command                                             | Action                                          |
| --------------------------------------------------- | ----------------------------------------------- |
| `supabase link`                                     | Link a new project to local                     |
| `supabase init`                                     | Create config file                              |
| `supabase db pull`                                  | Pull down table structure to local              |
| `supabase db dump -f supabase/seed.sql --data-only` | Pull down table data to local                   |
| `supabase migration list`                           | Action                                          |
| `supabase migration squash --linked`                | Combine all migration scripts into one SQL file |
| `supabase inspect db table-sizes`                   | Get sizes of each table                         |

## Supabase CLI General Commands

| Command                                             | Action                                          |
| --------------------------------------------------- | ----------------------------------------------- |
| `supabase start`                                    | Start container for local                       |
| `supabase stop`                                     | Stop container                                  |
| `supabase db reset`                                 | Restart container                               |
| `supabase status`                                   | Get API URLs                                    |
