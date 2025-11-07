# Running Catalyst App with Docker

## Getting Your Supabase Credentials

1. Go to [https://supabase.com](https://supabase.com)
2. Log in to your project
3. Go to Settings → API
4. Copy your:
   - **Project URL** (for `NEXT_PUBLIC_SUPABASE_URL`)
   - **Anon/Public Key** (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## Running the Container

### Option 1: Run with inline environment variables
\`\`\`bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co" \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here" \
  catalyst-app
\`\`\`

### Option 2: Run with .env file
First, create a `.env` file (copy from `.env.example` and fill in your values), then:
\`\`\`bash
docker run -p 3000:3000 --env-file .env catalyst-app
\`\`\`

### Option 3: Run in background (detached mode)
\`\`\`bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co" \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here" \
  --name catalyst-app catalyst-app
\`\`\`

Then visit: http://localhost:3000

## Stopping the Container
\`\`\`bash
docker stop catalyst-app
docker rm catalyst-app
\`\`\`
