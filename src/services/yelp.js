import { YELP_API } from "../../env";

export default async query => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + YELP_API);
    const response = await fetch(
      `https://api.yelp.com/v3/businesses${query}`,
      {
        headers: myHeaders
      }
    );
    return response.json();
  } catch (error) {
    throw Error(error);
  }
};
