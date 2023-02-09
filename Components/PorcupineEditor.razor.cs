using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Porcupine.Components
{
    public partial class PorcupineEditor
    {
        [Inject]
        private IJSRuntime? _JS { get; set; }

        public enum PorcupineTheme
        {
            SNOW,            
            BUBBLE           
        }

        [Parameter]
        public PorcupineTheme ActiveTheme { get; set; } = PorcupineTheme.SNOW;   

        [Parameter]
        public string Height { get; set; } = "100%";

        [Parameter]
        public string Width { get; set; } = "100%";

        [Parameter]
        public string Margin { get; set; } = "0px";

        [Parameter]
        public string Padding { get; set; } = "0px";

        [Parameter]
        public string Border { get; set; } = "1px solid #B3B3B3";

        [Parameter]
        public string BorderRadius { get; set; } = ".25rem";

        [Parameter]
        public string DefaultMessage { get; set; } = "Some porcupine quills are up to a foot long!";

        protected async override Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await _JS!.InvokeVoidAsync("startPorcupine", new string[] { ActiveTheme.ToString().ToLower(), DefaultMessage, Border, BorderRadius });
            }
        }

        public async Task<string> GetPorcupineText()
        {
            string text = await _JS!.InvokeAsync<string>("getPorcupineText");
            return text;
        }

        public async Task<string> GetPorcupineHTML()
        {
            string html = await _JS!.InvokeAsync<string>("getPorcupineHTML");
            return html;
        }

        public async Task SetPorcupineText(string text)
        {
           await _JS!.InvokeAsync<string>("setPorcupineText", text);
        }

        public async Task SetPorcupineHTML(string html)
        {
            await _JS!.InvokeVoidAsync("setPorcupineHTML", html);
        }
    }
}
