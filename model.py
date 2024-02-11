# import statements
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

class naive_bayes:
    def __init__(self):
        self.tfidf_vectorizer = None
        self.nb_model = None

    def train(self, X_train, y_train):
        # Initialize TF-IDF vectorizer
        self.tfidf_vectorizer = TfidfVectorizer()
        X_train_tfidf = self.tfidf_vectorizer.fit_transform(X_train)

        # Train Naive Bayes classifier
        self.nb_model = MultinomialNB()
        self.nb_model.fit(X_train_tfidf, y_train)

    def predict_model(self, text_data):
        # Preprocess the text data
        preprocessed_text = [text.lower() for text in text_data]

        # Transform text data into numerical features using TF-IDF
        text_tfidf = self.tfidf_vectorizer.transform(preprocessed_text)

        # Predict emotion labels using the Naive Bayes model
        predicted_labels = self.nb_model.predict(text_tfidf)

        return predicted_labels