import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
<<<<<<< HEAD
    
=======
    /* your functions will be passed here later! */
>>>>>>> origin
  ],
});
