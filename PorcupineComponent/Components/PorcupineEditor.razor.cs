using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace PorcupineHtmlEditor
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

        private Guid IdGUID = Guid.NewGuid();

        private string _ContainerId = null!;

        [Parameter]
        public string Id { get; set; } = null!;

        [Parameter]
        public string Class { get; set; } = "";

        [Parameter]
        public string Height { get; set; } = "100%";

        private string _EditorHeight
        {
            get
            {
                string padding = "";
                string unit = "";
                for (int character = 0; character < Padding.Length; character++)
                {
                    int thisNum = -1;
                    if (int.TryParse(Padding[character].ToString(), out thisNum))
                    {
                        padding += thisNum.ToString();
                    }
                    else if (Padding[character] == '.')
                    {
                        padding += ".";
                    }
                    else
                    {
                        unit += Padding[character];
                    }
                }
                float halfPadding = -1f;
                float.TryParse(padding, out halfPadding);
                if (halfPadding > 0f)
                {
                    padding = (halfPadding * 2f).ToString() + unit.ToString(); ;
                }
                return "calc(100% - 42px - " + padding + ")";
            }
        }

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
        public string PlaceholderText { get; set; } = "Some porcupine quills are up to 12 inches long!";

        [Parameter]
        public string InitialHTML { get; set; } = "<strong>BOLD</strong>";

        protected override void OnParametersSet()
        {
            if(Id == null!)
            {
                Guid idGuid = Guid.NewGuid();
                Id = "porcupine_" + idGuid;
                _ContainerId = "porcupineContainer_" + idGuid;
            }
            else
            {
                _ContainerId = Id + "Container";
            }
        }
        protected async override Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await _JS!.InvokeVoidAsync("startPorcupine", new object[] { Id, ActiveTheme.ToString().ToLower(), PlaceholderText, Border, BorderRadius });
                if(!string.IsNullOrWhiteSpace(InitialHTML))
                    await SetHTML((MarkupString)InitialHTML);
            }
        }
    }
}
