# Porcupine HTML Editor
 An easy to use Blazor component that wraps QuillJS to enable WYSIWIG style HTML editing in Blazor apps.
 
 Allows direct modification of CSS properties without requiring any additional CSS frameworks

 <p align="center">
	<img width="256" height="256" src="https://user-images.githubusercontent.com/9713177/217947860-3e629e3e-67c0-4478-9570-94948932bd1c.png" />
 </p>

<h3><strong>Set up the QuillJS Dependency</strong></h3>
<p>
<h4>You can link to the files from the QuillJS CDN or download them and reference them from your own project.</h4>
</p>
<ol>
<li>
In your .cshtml (Blazor Server) or .html file (WASM), reference one (or both) of the QuillJS themes.

Porcupine supports the "Snow" and "Bubble" themes.
	
<p>
	<img src="https://user-images.githubusercontent.com/9713177/218155253-3df3a9d2-d9d9-4740-92ec-6a34a8178f5f.png" />
</p>

	https://cdn.quilljs.com/1.3.6/quill.snow.css
	
	https://cdn.quilljs.com/1.3.6/quill.bubble.css	
	

</li>
<li>
At the end of the same file, reference the QuillJS library.	
<p>
	<img src="https://user-images.githubusercontent.com/9713177/218157241-fe1a3f82-743a-4d7a-9989-b6788124c42a.png" />
</p>	

	https://cdn.quilljs.com/1.3.6/quill.js
	
</li>
</ol>

<h3><strong>Set up Porcupine</strong></h3>
<p>
<h4>Download a .zip of the latest version from the <a href="https://github.com/polaarbear/Porcupine/releases">Releases</a> page.</h4>
<h4>Extract Porcupine.dll into a folder with any other pre-compiled libraries you may have</h4>
<h4>Extract porcupine.js into your project's wwwroot</h4>
</p>

<ol>
<li>
Add a reference to the Porcupine.dll assembly
<p>	
<img height="228px" src="https://user-images.githubusercontent.com/9713177/218158429-57717509-d817-4363-9f08-a8087cd2d632.png" />
<img height="228px" src="https://user-images.githubusercontent.com/9713177/218158436-8821f0b3-a40e-4274-a404-48e596f90362.png" />
</p>
</li>
<li>
Add a reference to the porcupine.js file beneath the quill.js reference
<p>
<img src="https://user-images.githubusercontent.com/9713177/218159906-62f0c532-2a47-4a87-8438-9477e3d0a775.png" />
</p>
</li>
<li>
Add the Porcupine.Components namespace to your _Imports.razor file.

Add a reference to Microsoft.JSInterop if you don't have it already.
<p>
<img src="https://user-images.githubusercontent.com/9713177/218162011-49c2baac-60bd-45be-b81a-5ee05611956f.png" />
</p>

	@using Porcupine.Components	
	@using Microsoft.JSInterop
</li>
</ol>

<h3><strong>Using Porcupine</strong></h3>
<p>
<h4>Insert the Editor</h4>
</p>
<ul>
<li>
Add the editor to your Blazor page with the PorcupineEditor tag
<p>
<img src="https://user-images.githubusercontent.com/9713177/218163089-ed72444d-0b1d-4653-a718-42ed1a2ab280.png" />
</p>
<p>
The control exposes a number of properties that can be overridden.  Most use standard CSS strings
</p>
<ul>
<li>
ActiveTheme - Enum
	
PorcupineTheme.SNOW or PorcupineTheme.BUBBLE
	
DEFAULT: PorcupineTheme.SNOW
</li>
<li>
Class - String

Overrides the main editor CSS class - MAY OVERRIDE OTHER DEFAULT STYLING, USE WITH CAUTION
</li>
<li>
Height - Accepts standard CSS strings
	
DEFAULT: 100%, editor will fill container that it is placed in
</li>
<li>
Width - Accepts standard CSS strings
	
DEFAULT: 100%, editor will fill container that it is placed in
</li>
<li>
Margin - Accepts standard CSS strings
	
DEFAULT: 0px
</li>
<li>
Padding - Accepts standard CSS strings
	
DEFAULT: 0px
</li>
<li>
Border - Accepts standard CSS strings
	
DEFAULT: 1px solid #B3B3B3
</li>
<li>
BorderRadius - Accepts standard CSS strings
	
DEFAULT: .25rem
</li>
<li>
DefaultMessage - Accepts a string - the same as html placeholder
	
DEFAULT: "Some porcupine quills are up to 12 inches long!";
</li>
</ul>
<h4>
Reference the Editor
</h4>
<li>
Get a reference to the editor in your @code block or code-behind file
</li>
<p>
<img src="https://user-images.githubusercontent.com/9713177/218168678-00d53f47-84d7-4fa7-920e-38c7f9a62269.png" />
</p>
</ul>

<p>
<h3><strong>Content</strong></h3>
</p>

<ul>
<li>
<strong>Get HTML Length</strong>

	int htmlLength = await _Porcupine.GetLength();
	
</li>
<li>
<strong>Retrieve Editor HTML</strong>
	
	string html = await _Porcupine.GetHTML();
</li>
<li>
<strong>Set Editor HTML</strong>
	
	await _Porcupine.SetHTML(string htmlString);
	await _Porcupine.SetHTML(MarkupString markupString);
</li>
<li>
<strong>Retrieve Editor Text</strong>
	
	string fullText = await _Porcupine.GetText();
	string textToEnd = await _Porcupine.GetText(int startIndex);
	string partialText = await _Porcupine.GetText(int startIndex, int length);
</li>
<li>
<strong>Set Editor Text</strong>
	
	await _Porcupine.SetText("SetPorcupineText");
</li>
<li>
<strong>Insert Text at Index</strong>

	await _Porcupine.InsertText(int index, string text);
</li>
<li>
<strong>Insert Image from URL</strong>

	await _Porcupine.InsertImage(int index, string imageURL);
</li>
</ul>


<p>
<h3><strong>Editor</strong></h3>
</p>

<ul>
<li>
<strong>Show Porcupine</strong>

	await _Porcupine.ShowPorcupine();
	
</li>
<li>
<strong>Hide Porcupine</strong>
	
	await _Porcupine.HidePorcupine();
</li>
<li>
<strong>Clear Focus</strong>
	
	await _Porcupine.ClearFocus;
</li>
<li>
<strong>Grab Focus</strong>
	
	await _Porcupine.GrabFocus();
</li>
<li>
<strong>Is Porcupine Focused?</strong>
	
	bool isFocused = await _Porcupine.IsFocused();
</li>
<li>
<strong>Enable Porcupine</strong>

	await _Porcupine.EnablePorcupine();
</li>
<li>
<strong>Disable Porcupine</strong>

	await _Porcupine.DisablePorcupine();
</li>
</ul>

<p>
<h3><strong>Formatting<strong></h3>
</p>

<ul>
<li>
<strong>Format Selection</strong>

	await _Porcupine.FormatSelection(string property, string value);
<li>
<strong>Format Text</strong>
	
	await _Porcupine.Text(int index, int length, string property, string value);
</li>
<li>
<strong>Clear Format</strong>
	
	await _Porcupine.ClearFormat(int index, int length);
</li>
</ul>

<p>
<h3><strong>Selection<strong></h3>
</p>

<ul>
<li>
<strong>Get Bounds</strong>

	JsonObject bounds = await _Porcupine.GetBounds(int index, int length);	
</li>
<li>
<strong>Get Selection</strong>
	
	JsonObject selection = _Porcupine.GetSelection();
</li>
<li>
<strong>Set Selection</strong>
	
	await _Porcupine.SetSelection(int index, int length);
</li>
</ul>
