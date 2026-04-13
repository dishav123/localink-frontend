// components/LogoutConfirmDialog.jsx
export default function LogoutConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg w-full max-w-xs p-7 flex flex-col gap-5">

        {/* Icon + title + subtitle */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </div>
            <p className="text-[15px] font-medium text-gray-900">Log out?</p>
          </div>
          <p className="text-[13px] text-gray-400 leading-relaxed pl-12">
            You'll need to sign in again to access your account.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-[13px] font-medium text-gray-500 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-red-500 text-[13px] font-medium text-white hover:bg-red-600 transition-colors"
          >
            Yes, log out
          </button>
        </div>

      </div>
    </div>
  );
}