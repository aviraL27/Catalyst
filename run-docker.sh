#!/bin/bash

# Run Catalyst app in Docker
# Replace the values below with your actual Supabase credentials

docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co" \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here" \
  catalyst-app
