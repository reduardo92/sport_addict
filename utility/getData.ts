import axios from 'axios';

export default async (url: string | string[], all?: boolean) => {
  if (all && typeof url === 'object') {
    try {
      const res = await axios.all(
        url.map(async (item) => await axios.get(item))
      );
      const data = res.flatMap((item) => [...Object.values(item.data)]).flat();

      return data;
    } catch (error) {
      console.log(error);
      return {
        error: 'sorry something went wrong',
      };
    }
  } else {
    if (!url || typeof url === 'object') return;
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      console.log(error);
      return {
        error: 'sorry something went wrong',
      };
    }
  }
};
