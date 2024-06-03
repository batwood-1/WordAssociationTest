import statistics
import random
import pickle
from pattern.en import singularize, pluralize
from gensim.parsing.preprocessing import stem
from operator import itemgetter


# for each word in wordlist, hand pick some words to add as initial related
# pick from the related, but make sure none of the control words are related to the flagged-relatives

class Word_Generator:
    
    def __init__(self):
        self.relevant_vectors = self._get_relevant_vectors(
            "data/swow_vectors1")
        self.vector_indices = self._get_swow_vector_indices(
            "data/swow_vector_indices1")
        self.wordlist = self._get_wordlist("data/wordlist")

        self.count = 0
        self.flagged = None
        self.stemmed_wordlist = set(map(stem, self.wordlist))
        self.threshold = 0.3

    @staticmethod
    def _get_relevant_vectors(path):
        """
        Get the relevant vectors
        """
        with open(path, 'rb') as f:
            relevant_vectors = pickle.load(f)
        return relevant_vectors

    @staticmethod
    def _get_swow_vector_indices(path):
        """
        get swow vector indices
        """
        with open(path, 'rb') as f:
            vector_indices = pickle.load(f)
        return vector_indices

    @staticmethod
    def _get_wordlist(path):
        """
        get wordlist
        """
        wordlist = []
        with open(path, 'r', encoding="utf8") as f:
            for line in f:
                wordlist.append(line.strip().lower())
        random.shuffle(wordlist)
        return wordlist

    # def generate_next_word(self, words: list[dict]):
    #     if self.count < len(self.wordlist):

    #         next = {"word": self.wordlist[count], "response": "", "time": 0}
    #         return words.append(next)

    #     if self.count == len(self.wordlist):
    #         self._geenerate_flagged(words)

    def _validate_word(self, word):
        """
        Make sure generated word is not already used
        """
        # Plural check
        if pluralize(word) in self.wordlist:
            return False

        # Singular check
        if singularize(word) in self.wordlist:
            return False

        # Stem check
        if stem(word) in self.stemmed_wordlist:
            return False

        # Containment check
        for wordlist_word in self.wordlist:
            if wordlist_word in word or word in wordlist_word:
                return False

        return True

    def _generate_neighbors(self, word):
        """
        given a word, generate similar words
        """
        # sort, raise threshold, maybe only R1
        candidates = []
        word_vector = self.relevant_vectors[word]
        for index, value in enumerate(word_vector):
            if value > self.threshold:
                candidate = self.vector_indices[index]
                if self._validate_word(candidate):
                    candidates.append((candidate,value))
        
        return sorted(candidates, key = itemgetter(1), reverse = True)

    def _generate_flagged(self, words: list[dict]) -> None:

        times = [word["time"] for word in words]
        stdev = statistics.stdev(times)
        mean = statistics.mean(times)
        self.flagged = [
            word for word in words if word["time"] > mean + 2 * stdev]

a = Word_Generator()
b = a._generate_neighbors("carrot")
c = a._get_wordlist("data/wordlist")



cancan = []
for word in c:
    neighbors= a._generate_neighbors(word)
    print(word)
    print("#################################")
    print(neighbors)
    the = input()
    cancan.append((word,the))
    
#deported, stork




