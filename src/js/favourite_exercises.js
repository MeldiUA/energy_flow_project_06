const cardSet = document.querySelector('.fav_card_list');

// emulation

const demoObj1 = {
  name: 'Air bike',
  excDetails: {
    burnedCalories: 13,
    bodyPart: 'Waist',
    target: 'Biceps',
  },
  id: 1,
  favourite: true,
};

const demoObj2 = {
  name: 'Stationary bike walk',
  excDetails: {
    burnedCalories: 116,
    bodyPart: 'Cardio',
    target: 'Cardiovascular system',
  },
  id: 2,
  favourite: false,
};

const demoObj3 = {
  name: 'mcChicken burger',
  excDetails: {
    burnedCalories: -50,
    bodyPart: 'Tummy',
    target: 'Hunger',
  },
  id: 3,
};

// ls functions

const setExerciseToLS = obj => {
  const LS_KEY_EXERCISE = obj.name;
  localStorage.setItem(LS_KEY_EXERCISE, JSON.stringify(obj));
};

const getExerciseFromLS = async name => {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {
    console.log(err.message);
    //   add notification here in future instead of log
  }
};

const removeExerciseFromLS = obj => {
  const LS_KEY_EXERCISE = obj.name;
  localStorage.removeItem(LS_KEY_EXERCISE);
};

setExerciseToLS(demoObj1);
setExerciseToLS(demoObj2);
setExerciseToLS(demoObj3);

const exercise = getExerciseFromLS('Stationary bike walk');
console.log(exercise);

// check storage logic

const checkStorage = () => {};
