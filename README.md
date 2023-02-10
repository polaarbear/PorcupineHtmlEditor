# Porcupine
 An easy to use Blazor component that wraps QuillJS to enable WYSIWIG style text editing.
 
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
<p>
	<img src="https://user-images.githubusercontent.com/9713177/218155253-3df3a9d2-d9d9-4740-92ec-6a34a8178f5f.png" />
</p>

	https://cdn.quilljs.com/1.3.6/quill.snow.css
	
	https://cdn.quilljs.com/1.3.6/quill.bubble.css
	
Porcupine supports the "Snow" and "Bubble" themes.
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
<h4>Download the Porcupine.zip file from the Releases page.</h4>
<h4>Extract Porcupine.dll into a folder with any other pre-compiled libraries you may have, and extract porcupine.js into your project's wwwroot</h4>
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
<h4>Porcupine is ready to use</h4>
</p>
<ul>
<li>
Add the editor to your Blazor page with the tag PorcupineEditor tag
<p>
<img src="https://user-images.githubusercontent.com/9713177/218163089-ed72444d-0b1d-4653-a718-42ed1a2ab280.png" />
<p>
The control exposes a number of properties that can be overridden.  Most use standard CSS strings
</p>
<ul>
<li>
ActiveTheme - Enum - PorcupineTheme.SNOW or PorcupineTheme.BUBBLE
</li>
<li>
Class - Overrides the main editor CSS class - MAY OVERRIDE OTHER DEFAULT STYLING, USE WITH CAUTION
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
<ul>
</p>
</li>
</ul>
