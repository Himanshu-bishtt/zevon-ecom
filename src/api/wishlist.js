export const sendItems = async items => {
  try {
    const res = await fetch(
      `https://zevon-ecom-default-rtdb.firebaseio.com/wishlist.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      }
    );

    if (!res.ok) throw new Error('Error sending data');
  } catch (err) {
    alert(err.message);
  }
};
