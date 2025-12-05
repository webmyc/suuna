---
description: How to obtain a Gumroad Access Token for API integration
---

# How to Get Your Gumroad Access Token

To fetch your products for the Suuna Vault, you need an Access Token from Gumroad.

1.  **Log in to Gumroad**: Go to [gumroad.com](https://gumroad.com) and log in.
2.  **Go to Settings**: Click on your profile picture in the bottom left and select **Settings**.
3.  **Navigate to Advanced**: Click on the **Advanced** tab in the settings menu (or go to [gumroad.com/settings/advanced](https://gumroad.com/settings/advanced)).
4.  **Create an Application**:
    *   Scroll down to the **Applications** section.
    *   Click **New Application**.
    *   **Name**: Enter "Suuna Vault" (or any name you prefer).
    *   **Redirect URI**: You can enter `http://localhost:4321` (it's required but not used for this integration).
    *   Click **Create application**.
5.  **Generate Access Token**:
    *   Once created, you will see your application details.
    *   Look for the **"Generate access token"** button or section.
    *   Click it to reveal your token.
6.  **Copy the Token**: Copy the string that appears. It usually starts with `access_token_...` or is a long alphanumeric string.
7.  **Save it**: Add this token to your `.env` file or Vercel environment variables as `GUMROAD_ACCESS_TOKEN`.

```bash
# .env
GUMROAD_ACCESS_TOKEN=your_token_here
```
