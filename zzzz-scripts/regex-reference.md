# Replace and create Attribute and Attribute Test
```
Find:
^(Attribute)(:: )(\[\[)([\w\s]*)(\|?.*?)(\]\])

Replace:
$1$2$4\n$1-Test::$3$4$5$6
```

# Indirect and Direct Object Reference

Find:
^(Indirect-Object::.*\n)(\tReference-statement::)(.*)
Replace:
$1Indirect-Object-Reference:: $3