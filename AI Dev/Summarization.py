from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

model = AutoModelForSeq2SeqLM.from_pretrained('google/pegasus-xsum')
tokenizer = AutoTokenizer.from_pretrained('google/pegasus-xsum')

text_example = "The City of Paris is the centre and seat of government of the region and province of Île-de-France, or Paris Region, which has an estimated population of 12,174,880, or about 18 percent of the population of France as of 2017"

tokens_input = tokenizer.encode("summarize: "+ text_example, return_tensors='pt', max_length=512, truncation=True)
ids = model.generate(tokens_input, min_length=80, max_length=120)
summary = tokenizer.decode(ids[0], skip_special_tokens=True)

# print(summary)