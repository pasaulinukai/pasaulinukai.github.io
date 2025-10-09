// netlify/functions/submitOrder.js
exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    // Base price logic
    let price = data.type?.includes("3D") ? 12.0 : 4.99;

    // Secret discount code (100!OFF)
    if (data.salesCode === "100!OFF") {
      price = 0;
    }

    // You can later add email-sending or Formspree logic here securely
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Užklausa sėkmingai pateikta!",
        finalPrice: price.toFixed(2),
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Bloga užklausa." }),
    };
  }
};
