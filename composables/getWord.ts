export const getWord = async () => {
    const word = await $fetch("/server/api/word");
    console.log(word);
    return word;
  };