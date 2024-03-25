const { addForm } = document.forms;
const addBtns = document.querySelectorAll('.addbtnOld');
const deleteBtns = document.querySelectorAll('.remove');
const finish = document.querySelector('.finish');
addForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const { skillid, exerciseid } = e.target.dataset;
    const data = new FormData(addForm);
    const res = await fetch(`/skills/${skillid}/${exerciseid}`, {
      method: 'post',
      body: data,
    });
    if (res.status === 200) {
      window.location.href = `/skills/${skillid}/${exerciseid}`;
    }
  } catch (error) {
    console.log(error);
  }
});

addBtns?.forEach((btn) => {
  btn?.addEventListener('click', async (e) => {
    try {
      const { id, skillid, exerciseid } = e.currentTarget.dataset;
      const res = await fetch(`/skills/existing/${skillid}/${exerciseid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (res.status === 200) {
        window.location.href = `/skills/${skillid}/${exerciseid}`;
      }
    } catch (error) {
      console.log(error);
    }
  });
});

deleteBtns?.forEach((btn) => {
  btn?.addEventListener('click', async (e) => {
    try {
      const { id } = e.target;
      const res = await fetch(`/skills`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      document.getElementById(`${id}`).remove();
    } catch (error) {
      console.log(error);
    }
  });
});

finish?.addEventListener('click', async (e) => {
  try {
    const info = document.querySelectorAll('.input-result');
    const userResult = document.querySelectorAll('.info-result');

    const resultArray = [];
    let Filled = true;

    info.forEach((input, index) => {
      const { exerciseid } = input.dataset;
      const result = input.value;
      const id = input.id;
      if (!result) {
        Filled = false;
        return;
      }
      resultArray.push({ exerciseid, id, result });
    });
    if (!Filled) {
      alert('Пожалуйста, заполните все упражнения.');
      return;
    }
    const res = await fetch(`/skills/result`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resultArray),
    });
    const data = await res.json();

    if (res.ok) {
      userResult.forEach((result, i) => {
        result.textContent = `Last result: ${resultArray[i].result}x`;
      });
      info.forEach((i) => {
        i.value = '';
      });
    } else {
      console.error('Произошла ошибка:', data.error);
    }
  } catch (error) {
    console.log(error);
  }
});
