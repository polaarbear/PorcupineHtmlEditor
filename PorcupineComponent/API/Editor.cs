using Microsoft.JSInterop;

namespace PorcupineHtmlEditor
{
    public partial class PorcupineEditor
    {
        public async Task ShowPorcupine()
        {
            await _JS!.InvokeVoidAsync("showPorcupine", _ContainerId);
        }
        public async Task HidePorcupine()
        {
            await _JS!.InvokeVoidAsync("hidePorcupine", _ContainerId);
        }

        public async Task ClearFocus()
        {
            await _JS!.InvokeVoidAsync("clearPorcupineFocus", Id);
        }

        public async Task GrabFocus()
        {
            await _JS!.InvokeVoidAsync("grabPorcupineFocus", Id);
        }

        public async Task<bool> IsFocused()
        {
            return await _JS!.InvokeAsync<bool>("isPorcupineFocused", Id);
        }

        public async Task EnablePorcupine()
        {
            await _JS!.InvokeVoidAsync("enablePorcupine", Id);
        }

        public async Task DisablePorcupine()
        {
            await _JS!.InvokeVoidAsync("disablePorcupine", Id);
        }
    }
}
