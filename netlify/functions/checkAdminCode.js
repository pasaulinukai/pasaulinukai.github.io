// netlify/functions/checkAdminCode.js
exports.handler = async (event) => {
  try {
    const { code } = JSON.parse(event.body || "{}");

    // ✅ Only correct code passes (not exposed in client)
    const ADMIN_CODE = process.env.ADMIN_CODE || "4272";

    if (code === ADMIN_CODE) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Neteisingas kodas." }),
      };
    }
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Bloga užklausa." }),
    };
  }
};
