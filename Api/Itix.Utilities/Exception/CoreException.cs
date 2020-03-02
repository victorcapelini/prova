using System;
using System.Collections.Generic;
using System.Text;

namespace Itix.Utilities.Exception
{
    [Serializable()]
    public class CoreException : System.Exception
    {
        public CoreException() : base() { }
        public CoreException(string message) : base(message) { }
        public CoreException(string message, System.Exception inner) : base(message, inner) { }

        protected CoreException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
