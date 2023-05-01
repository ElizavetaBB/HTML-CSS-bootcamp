# Notes
## Name and placeholder attributes
To give a name for a variable of a form you can put an attribute name='value name'.
```
<input type="text" name="firstVal">
```
So, for example, in get method it will be passed as a GET parameter `?firstVal=[written_value]`

Placeholder is an attribute which gives a hint to inputs.
```
<input type="text" placeholder="Type your request...">
```
## Labels
You can click on them to focus on the related input.
```
<label for="id">
<input type="text id="id">
```
## Select
They consist of `<select></select>` and `<option>` is inside. To set value attribute is crucial because it's sent to a server

Option is sent under the name attribute from `<select>`.

## Radio
To group radio buttons you should give them the same name attribute.