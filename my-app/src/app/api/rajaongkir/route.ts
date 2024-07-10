import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { origin, destination, weight, courier } = await request.json();

  console.log("Request Data:", { origin, destination, weight, courier }); // Debug log

  const response = await fetch("https://api.rajaongkir.com/starter/cost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": process.env.RAJAONGKIR_API_KEY,
    },
    body: JSON.stringify({
      origin,
      destination,
      weight,
      courier,
    }),
  });

  const data = await response.json();

  console.log("Response Data:", data); // Debug log

  return NextResponse.json(data);
}
