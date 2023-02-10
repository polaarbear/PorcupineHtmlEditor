# Porcupine
 A Blazor component that wraps the QuillJS text editor

 <p align="center">
	<img width="256" height="256" src="https://user-images.githubusercontent.com/9713177/217947860-3e629e3e-67c0-4478-9570-94948932bd1c.png" />
 </p>

<p>
<ol>
<li>
In your _Layout.cshtml, place links to the QuillJS style sheet that matches the theme you are using, either by linking to the files directly, or downloading them and loading them into your local project

Snow Theme is available at:

	https://cdn.quilljs.com/1.3.6/quill.snow.css
	
Bubble Theme is available at:

	https://cdn.quilljs.com/1.3.6/quill.bubble.css
</li>
<li>
At the end of the same file (_Layout.cshtml), attach the QuillJS JavaScript library, again by linking to the file source directly, or by downloading it into your own project.
	
The QuillJS JavaScript files are available at:
	
	https://cdn.quilljs.com/1.3.6/quill.js
	
</li>
<li>
At the end of the same file (_Layout.cshtml), attach the Porcupine JavaScript library, it is included in the content directory of the Nuget package.

Link it via the source location:

	_content/Porcupine/js/porcupine.js
</li>
<li>
The end result in a fresh project would look something like this

 <p align="center">
	<img width="570" height="292" src="https://user-images.githubusercontent.com/9713177/217970965-679e0354-ba1b-4726-abc6-0beb00143d01.png" />
 </p>
</li>
</ol>
</p>
