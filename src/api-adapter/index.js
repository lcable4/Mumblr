const BASE_URL = "https://juicebox-n89w.onrender.com/api";

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
    });
    const result = await response.json();

    return result.posts;
  } catch (error) {
    console.log(error);
  }
};
export const getAllTags = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tags`, {
      method: "GET",
    });
    const result = await response.json();

    return result.tags;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    return result.users;
  } catch (error) {
    console.log(error);
  }
};

export const getIndividualPost = async (_id) => {
  try {
    const response = await fetch(`${BASE_URL}/${_id}`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postThePost = async (title, article) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: article,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (username, password) => {
  try {
    console.log(`${BASE_URL}/users/login`);
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (username, password, name, location) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
        location: location,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (title, description, price) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const MessageSeller = async (content) => {
  try {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const DeletePost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
